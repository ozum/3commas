/* eslint-disable unicorn/no-array-callback-reference */
import type { Client } from "../client.js";
import type { Response } from "../index.js";

/**
 * Some APIs use `{ limit: n, offset: n }`, others use `{ per_page: n, page: n}`. Provide both, extra ones will be ignored by API.
 */
interface BatchQuery {
  limit: number;
  offset: number;
  per_page: number;
  page: number;
}

// type Fetcher<T> = (params?: BatchQuery, client?: Client) => Promise<T[]>;
type Fetcher<T, CN extends boolean = true> = (params?: BatchQuery, client?: Client<CN>) => Response<T, CN>; // eslint-disable-line @typescript-eslint/no-explicit-any

// function isRejected(input: object): input is PromiseRejectedResult {
//   return Reflect.has(input, "reason");
// }

// function isFulfilled<T>(input: object): input is PromiseFulfilledResult<T> {
//   return Reflect.has(input, "value");
// }

// export async function getAll<T>(batchSize: number, parallel: number, fetcher: Fetcher<T>, client: Client, params?: object): Promise<T[]>;
// export async function getAll<T, CN extends boolean>(
//   batchSize: number,
//   parallel: number,
//   fetcher: Fetcher<T, CN>,
//   client: Client<CN>,
//   params?: object,
// ): Response<T, CN> {
//   const maxBatch = 5;
//   const items = [];
//   let moreToFetch = true;

//   for (let batch = 1; batch <= maxBatch && moreToFetch; batch += 1) {
//     const start = (batch - 1) * parallel + 1;
//     const promises = [] as Response<T, CN>[];

//     for (let i = start; i < start + parallel; i += 1)
//       promises.push(fetcher({ ...params, per_page: batchSize, page: i, limit: batchSize, offset: (i - 1) * batchSize }, client));

//     const results = await Promise.allSettled(promises); // eslint-disable-line no-await-in-loop

//     const errors = results.filter(isRejected).map((e) => e.reason as object);
//     if (errors.length > 0) throw new AggregateError(errors, "One or more requests failed");

//     const batchItems = (results as PromiseFulfilledResult<Response<T, CN>>[]).flatMap((result) => result.value);
//     items.push(...batchItems);

//     // If number of items is equal to batch size (batch is full), then there could be more items to fetch.
//     moreToFetch = batchItems.length === batchSize * parallel;
//   }
//   return items as Data<T, CN>;
// }

/**
 * Executes parallel requests in batches to fetch all items such as `accounts` or `bots`.
 *
 * @param pageSize is the maximum record number allowed in one request by 3Commas API. (`limit` or `per_page`)
 * @param parallel is the number of parallel requests in a single batch.
 * @param fetcher is the normal function to fetch records (The function to fetch in a single request). This function is executed multiple times in parallel.
 * @param client is the client to be used to fetch records.
 * @param params are the parameters for the API endpoint.
 * @param maxPage is the maximum number of pages to retrieve. If this value is too high, server may blacklist the client.
 * @returns the records.
 *
 * @throws `AggregateError` if one or more requests fails.
 */
export async function getAll<T, CN extends boolean>(
  pageSize: number,
  parallel: number,
  fetcher: Fetcher<T, CN>,
  client: Client<CN>,
  params?: object,
  maxPage = 10,
): Response<T, CN> {
  const jobs = [] as (() => Response<T, CN>)[];

  for (let page = 1; page <= maxPage; page += 1)
    jobs.push(() => fetcher({ ...params, per_page: pageSize, page, limit: pageSize, offset: (page - 1) * pageSize }, client));

  return parallelSettled(jobs, { parallel, finishIfLessThan: pageSize });
}

/**
 * Executes given async functions in parallel batches. For example 6 functions can be run in 2 batches of 3 parallel jobs.
 *
 * @param jobs are the functions to execute.
 * @param parallel determines how many jobs are executed in parallel.
 * @param finishIfLessThan is the minimum number of items to fetch in the last batch. If less items are fetched, it means that there are no more items to fetch and no more future jobs are executed.
 * @returns results off all jobs as an array.
 *
 * @throws `AggregateError` if one or more jobs fails after all jobs are finished. (Similar to `Promise.allSettled()`).
 */
export async function parallelSettled<T>(jobs: (() => Promise<T>)[], { parallel = 5, finishIfLessThan = 0 } = {}): Promise<T> {
  const values: T[] = [];
  const errors: Error[] = [];

  for (let batch = 0; batch < Math.ceil(jobs.length / parallel); batch += 1) {
    const batchJobs = jobs.slice(batch * parallel, (batch + 1) * parallel).map((job) => job());
    const batchResults = await Promise.allSettled(batchJobs); // eslint-disable-line no-await-in-loop

    batchResults.forEach((result) => {
      // if ("value" in result) values.push(...(arrify(result.value) as T[]));
      if ("value" in result) {
        if (finishIfLessThan) values.push(...(result.value as T[]));
        else values.push(result.value);
      } else if ("reason" in result) errors.push(result.reason as Error);
    });

    const moreToFetch = finishIfLessThan && errors.length === 0 && values.length === finishIfLessThan * parallel * (batch + 1);
    if (finishIfLessThan && !moreToFetch) break;
  }

  if (errors.length > 0) throw new AggregateError(errors, "One or more requests failed");
  return values as T;
}
