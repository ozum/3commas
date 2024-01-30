/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import winston from "winston";
import crypto from "node:crypto";
import type { ThreeCommasError, Data, Response, AugmentedThreeCommasError } from "./types/index.js";
import { toData, toDto } from "./utils/convert.js";

export type Method = "GET" | "POST" | "DELETE" | "PATCH";

// Get API key and secret from environment variables and use them if not provided via options.
const API_KEY_ENV = process.env.THREE_COMMAS_API_KEY as string;
const API_SECRET_ENV = process.env.THREE_COMMAS_API_SECRET as string;
const ENDPOINT = "https://api.3commas.io/public/api";

type LogLevel = "error" | "warn" | "info" | "verbose" | "debug" | "silly";

export interface ClientOptions<CN extends boolean> {
  /** 3Commas API key. If not provided it will be loaded from `THREE_COMMAS_API_SECRET` environment variable. */
  apiKey?: string;
  /** 3Commas API secret. If not provided it will be loaded from `THREE_COMMAS_API_KEY` environment variable. */
  apiSecret?: string;
  /** Forced mode can be `real` or `paper`. If it is paper, api operates on paper account in 3Commas. */
  forcedMode?: "real" | "paper";
  /** If true no updates are sent to server. */
  dry?: boolean;
  /** If `true` all numeric fields represented as a string in 3Commas API responses are converted to numbers. No conversion needed in requests. */
  convertNumeric?: CN;
  /** The log level used by default logger. */
  logLevel?: LogLevel;
  /** If provided created client use this custom logger. */
  logger?: winston.Logger;
}

type QueryParams = Record<string, any>;

/**
 * A 3Commas client to interact with 3Commas API. Implements security rules explained in official API docs.
 * Provides a simple request method to access the API.
 *
 * Static default client is used by API services if no client is provided as a parameter. Default client can be
 * set to a custom client. In this case API services uses the new default client if no client is passed as a parameter.
 *
 * By default uses API key and secret from environment variables `THREE_COMMAS_API_KEY` and `THREE_COMMAS_API_SECRET`.
 *
 * @typeParam CN if `true` all numeric fields represented as a string in 3Commas API responses are converted to numbers. No conversion needed in requests.
 *
 * @see https://github.com/3commas-io/3commas-official-api-docs#signed--endpoint-security
 * @example
 * const client = new Client({ apiKey: "abc", apiSecret: "abc" });
 * const response = client.get("/ver1/bots", { limit: 100 });
 *
 * const defaultClient = Client.defaultClient;
 * Client.defaultClient = new Client({ apiKey: "abc", apiSecret: "abc" }); //
 */
export class Client<CN extends boolean = true> {
  static #defaultClient?: Client; // eslint-disable-line no-use-before-define
  readonly #apiKey: string;
  readonly #apiSecret: string;
  readonly #forcedMode: "real" | "paper";
  readonly #dry: boolean;
  readonly #convertNumeric: boolean;
  readonly logger: winston.Logger;

  constructor({
    apiKey = API_KEY_ENV,
    apiSecret = API_SECRET_ENV,
    forcedMode = "real",
    dry = false,
    convertNumeric = true as CN,
    logLevel = process.env.NODE_ENV === "production" ? "warn" : "verbose",
    logger,
  }: ClientOptions<CN> = {}) {
    this.#apiKey = apiKey;
    this.#apiSecret = apiSecret;
    this.#forcedMode = forcedMode;
    this.#dry = dry;
    this.#convertNumeric = convertNumeric;
    this.logger = Client.#createLogger(logLevel, logger);

    if (this.#dry) this.logger.warn("Dry run: No updates will be sent to server!");
    if (!apiKey || !apiSecret)
      throw new Error(
        "API Key and Secret missing. Use options or environment variables: 'THREE_COMMAS_API_KEY' and 'THREE_COMMAS_API_SECRET'.",
      );
  }

  /** Lazily loaded static default Client. */
  static get defaultClient(): Client {
    if (Client.#defaultClient === undefined) Client.#defaultClient = new Client();
    return Client.#defaultClient;
  }

  async get<T>(path: string, params?: QueryParams) {
    return this.#request<T>("GET", path, params);
  }

  async post<T>(path: string, params?: QueryParams) {
    return this.#request<T>("POST", path, params);
  }

  async delete<T>(path: string, params?: QueryParams) {
    return this.#request<T>("DELETE", path, params);
  }

  async patch<T>(path: string, params?: QueryParams) {
    return this.#request<T>("PATCH", path, params);
  }

  /**
   * Returns logger to be used by this client.
   *
   * @param logLevel is the log level used by default logger.
   * @param logger is the custom logger. If provided created client use this custom logger.
   * @returns winston logger.
   */
  static #createLogger(logLevel: LogLevel, logger?: winston.Logger): winston.Logger {
    if (logger) return logger;
    const format = winston.format.combine(winston.format.colorize(), winston.format.simple());
    const consoleTransport = new winston.transports.Console({ format });
    return winston.createLogger({
      level: logLevel,
      format: winston.format.json(),
      defaultMeta: { service: "app" },
      transports: [consoleTransport],
    });
  }

  /**
   * Requests data from the given 3Commas API URL path, using the given parameters and HTTP method.
   *
   * @param method is the HTTP method.
   * @param path is the path of the 3Commas API URL.
   * @param params are the parameters for the requested endpoint.
   * @returns data for the request.
   *
   * @throws Error if request fails or 3Commas responses with a 3Commas error.
   */
  async #request<T>(method: Method, path: string, params?: QueryParams): Response<T, CN> {
    this.logger.verbose("Request", { service: "client", method, path, id: params?.id });
    this.logger.debug("Parameters", { service: "client", params });

    if (params) params = toDto(params); // eslint-disable-line no-param-reassign

    const url = `${ENDPOINT}${path}`;
    const body = (method === "GET" ? undefined : JSON.stringify(params)) as BodyInit | null;
    const signature = await this.#getSignature(Client.#getSignatureUrl(method, url, params));
    const headers = { apiKey: this.#apiKey, signature, "Content-Type": "application/json", "Forced-Mode": this.#forcedMode };
    const response = await fetch(Client.#getRequestUrl(method, url, params), { method, body, headers });
    const data: T = await response.json();

    Client.#assertResponse(data, method, path, params);

    return toData(data, this.#convertNumeric) as Data<T, CN>;
  }

  /**
   * Asserts that data is result of a successful request by throwing error if given data is a 3Commas error.
   *
   * @param data is the data to check.
   * @param method is the request method.
   * @param path is the path of the request.
   * @param params are the parameters sent to end point.
   *
   * @throws Error if data is a 3Commas error.
   */
  static #assertResponse<T>(data: T | ThreeCommasError, method: Method, path: string, params: QueryParams = {}): void {
    const isThreeCommasError = typeof data === "object" && data !== null && Reflect.has(data, "error");
    if (!isThreeCommasError) return;

    const error = { ...data, method, path } as AugmentedThreeCommasError;
    if (typeof params === "number") error.id = params;
    else if (typeof params === "object") {
      if ("id" in params) error.id = params.id;
      if ("pairs" in params) error.pairs = params.pairs;
    }

    throw new Error("Request failed.", { cause: error });
  }

  static #stringify(data: Record<string, string | string[] | number | number[]> = {}): string {
    const stringData = Object.entries(data).flatMap(([k, v]) => (Array.isArray(v) ? v.map((x) => [k, x.toString()]) : [[k, v.toString()]]));
    return new URLSearchParams(stringData).toString();
  }

  async #getSignature(message: string): Promise<string> {
    return this.#apiSecret.startsWith("-----BEGIN") ? this.#getSignaturePrivateKey(message) : this.#getSignatureApiSecret(message);
  }

  async #getSignatureApiSecret(message: string): Promise<string> {
    const { subtle } = globalThis.crypto;
    const enc = new TextEncoder();
    const secret = enc.encode(this.#apiSecret);
    const key = await subtle.importKey("raw", secret, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign", "verify"]);
    const signature = await subtle.sign("HMAC", key, enc.encode(message));
    return [...new Uint8Array(signature)].map((x) => x.toString(16).padStart(2, "0")).join("");
  }

  // TODO: I could not find a way to use Web API crypto (`globalThis.crypto`) for this function. It uses `node:crypto`, so is not compatible with browsers.
  #getSignaturePrivateKey(message: string): string {
    // Replace raw \n character with the newline character. Probably you get the key as raw data from your environment and \n character in the raw is not treated as a newline character.
    const privateKey = this.#apiSecret.split(String.raw`\n`).join("\n");
    const payload = message;
    const sign = crypto.createSign("RSA-SHA256");
    sign.update(payload);
    return sign.sign(privateKey, "base64");
  }

  static #getSignatureUrl(method: Method, url: string, params?: QueryParams): string {
    const query = method === "GET" ? Client.#stringify(params) : JSON.stringify(params ?? {});
    const queryString = params ? `?${query}` : "";
    return new URL(url).pathname + queryString;
  }

  static #getRequestUrl(method: Method, url: string, params?: QueryParams): string {
    const qm = params ? "?" : "";
    return method === "GET" ? url + qm + Client.#stringify(params) : url;
  }
}
