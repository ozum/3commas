import qcompare from "qcompare";

/**
 * The DirtyChecker class keeps track of changes made to an object and determines if it is dirty (changed) or not.
 * This class can be used to prevent unnecessary API calls to the API endpoints.
 * Distinguishes difference between non existing keys and undefined values.
 */
export class DirtyChecker<T> {
  /** Used to store the immutable keys that the `DirtyChecker` is preventing changes for. */
  #immutableKeys: Set<keyof T>;

  /** Used to store the changes that have been made to the original data object. */
  #changedData: Partial<T> = {};

  /** Used to store the original data object that the `DirtyChecker` is tracking changes for. */
  #data: T;

  /** Used to store the keys created, which does not exists in the original clean data. This is used to distinguish non existing keys from undefined values. */
  #createdKeys = new Set<keyof T>();

  /**
   * @param data is the original data object that the `DirtyChecker` is tracking changes for.
   */
  public constructor(data: T, immutableKeys: (keyof T)[] = []) {
    this.#data = data;
    this.#immutableKeys = new Set(immutableKeys);
  }

  public debug(): void {
    console.info(this.#createdKeys);
    console.info(this.#changedData);
  }

  /** Whether the object is dirty (changed). */
  public get isDirty(): boolean {
    return Object.keys(this.#changedData).length > 0 || this.#createdKeys.size > 0;
  }

  /**
   * Determines whether the property is dirty (changed).
   *
   * @param key is the name of the property to check.
   * @returns whether the property is dirty (changed).
   */
  public isDirtyKey(key: keyof T): boolean {
    return Reflect.has(this.#changedData, key) || this.#createdKeys.has(key);
  }

  /**
   * Sets the value of a property in the original data object and tracks whether the value is changed from the original.
   *
   * @param key is the name of the property to set.
   * @param newValue is the new value of the property.
   * @returns the new value of the property.
   */
  public set<K extends keyof T>(key: K, newValue: T[K]): T[K] {
    this.#assertMutableKey(key);
    const oldValue = this.#data[key];
    const isClean = !Reflect.has(this.#changedData, key) && !this.#createdKeys.has(key); // Old value is clean.
    const backToClean = !isClean && DirtyChecker.#isEqual(this.#changedData[key], newValue) && !this.#createdKeys.has(key); // New value is the original clean value.
    const isCreated = isClean && !Reflect.has(this.#data as object, key); // Value is added with a new key.
    const isChanged = !Reflect.has(this.#data as object, key) || !DirtyChecker.#isEqual(oldValue, newValue); // New value added or old value chnaged.
    if (isChanged) {
      this.#data[key] = newValue;
      if (backToClean) delete this.#changedData[key]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
      else if (isCreated) this.#createdKeys.add(key);
      else if (isClean) this.#changedData[key] = oldValue;
    }

    return newValue;
  }

  /**
   * Deletes the key from the original data object and tracks whether the value is changed from the original.
   *
   * @param key is the name of the property to set.
   */
  public delete<K extends keyof T>(key: K): void {
    this.#assertMutableKey(key);
    const oldValue = this.#data[key];
    const isClean = !Reflect.has(this.#changedData, key) && !this.#createdKeys.has(key);
    if (this.#createdKeys.has(key)) this.#createdKeys.delete(key);
    else if (Reflect.has(this.#data as object, key) && isClean) this.#changedData[key] = oldValue;

    delete this.#data[key]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
  }

  /**
   * Compares two values or objects for equality. It treats very close floating point numbers as equals to overcome
   * floating point arithmetic rounding issues.
   *
   * @param a is the first value.
   * @param b is the second value.
   * @returns `true` if the values are equal, `false` otherwise.
   */
  static #isEqual(a: unknown, b: unknown): boolean {
    if (typeof a === "number" && typeof b === "number") return this.#numberEqual(a, b);
    return qcompare(a, b);
  }

  /**
   * Compares two numbers for equality. It treats very close floating point numbers as equals to overcome
   * floating point arithmetic rounding issues.
   *
   * @param a is the first number.
   * @param b is the second number.
   * @returns `true` if the numbers are equal, `false` otherwise.
   */
  static #numberEqual(a: number, b: number): boolean {
    if (a === b) return true;
    const diff = Math.abs(a - b);
    if (diff < Number.EPSILON) return true;
    return diff <= Number.EPSILON * Math.min(Math.abs(a), Math.abs(b));
  }

  /**
   * Checks if a given key is mutable and throws an error if it is not.
   *
   * @param key is the name of the property to check.
   *
   * @throws Error if given key is noı mutable.
   */
  #assertMutableKey(key: keyof T): void {
    if (this.#immutableKeys.has(key)) throw new Error(`"${key.toString()}" cannot be changed.`);
  }
}
