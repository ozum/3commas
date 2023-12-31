import { DirtyChecker } from "./dirty-checker.js";

const getChecker = (): DirtyChecker<{ foo: string; bar: number; baz?: string }> => new DirtyChecker({ foo: "bar", bar: 1 / 3 });

describe("dirtyChecker", () => {
  it("tracks dirtiness when setting new value", () => {
    const checker = getChecker();
    checker.set("foo", "world");
    expect(checker.isDirty).toBe(true);
  });

  it("tracks dirtiness when deleting key", () => {
    const checker = getChecker();
    checker.delete("foo");
    expect(checker.isDirty).toBe(true);
  });

  it("throws error when setting immutable key", () => {
    const checker = new DirtyChecker({ foo: "hello" }, ["foo"]);
    expect(() => checker.set("foo", "world")).toThrow('"foo" cannot be changed');
  });

  it("should mark object as dirty when value is changed", () => {
    const checker = getChecker();
    checker.set("foo", "baz");
    expect(checker.isDirty).toBe(true);
  });

  it("should mark object as clean when value is not changed", () => {
    const checker = getChecker();
    expect(checker.isDirty).toBe(false);
  });

  it("should mark object as clean when set to same value", () => {
    const checker = getChecker();
    checker.set("foo", "qux");
    expect(checker.isDirty).toBe(true);
    checker.set("foo", "bar");
    expect(checker.isDirty).toBe(false);
  });

  it("should track new keys as created", () => {
    const checker = getChecker();
    expect(checker.isDirty).toBe(false);
    checker.set("baz", "value");
    expect(checker.isDirty).toBe(true);
  });

  it("should track new keys as created even new value is undefined", () => {
    const checker = getChecker();
    expect(checker.isDirty).toBe(false);
    checker.set("baz", undefined);
    expect(checker.isDirty).toBe(true);
  });

  it("should mark created and then deleted keys as clean", () => {
    const checker = getChecker();
    checker.set("baz", "value");
    checker.delete("baz");
    expect(checker.isDirty).toBe(false);
  });

  it("should mark key as dirty when value is changed", () => {
    const checker = getChecker();
    checker.set("foo", "baz");
    expect(checker.isDirtyKey("foo")).toBe(true);
  });

  it("should mark key as clean when value is not changed", () => {
    const checker = getChecker();
    expect(checker.isDirtyKey("foo")).toBe(false);
    checker.set("foo", "baz");
    checker.set("foo", "bar");
    expect(checker.isDirtyKey("foo")).toBe(false);
  });

  it("should mark as dirty when deleting key", () => {
    const checker = getChecker();
    checker.delete("foo");
    expect(checker.isDirty).toBe(true);
  });

  it("should mark as clean when floating point number difference is negligible.", () => {
    const checker = getChecker();
    checker.set("bar", 1 / 3);
    expect(checker.isDirty).toBe(false);
    checker.set("bar", 1 - 2 / 3);
    expect(checker.isDirty).toBe(false);
  });

  it("should mark as dirty when floating point number difference is small but not negligible.", () => {
    const checker = getChecker();
    checker.set("bar", 0.333_333_333_333_333_87);
    expect(checker.isDirty).toBe(true);
  });
});
