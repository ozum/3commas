import { toData, toDto } from "./convert.js";

describe("convert", () => {
  describe("toData", () => {
    it("converts keys to camelCase", () => {
      const input = { snake_case: "value" };
      const expected = { snakeCase: "value" };
      expect(toData(input, false)).toStrictEqual(expected);
    });

    it("converts numeric strings to numbers", () => {
      const input = { string: "1.23" };
      const expected = { string: 1.23 };
      expect(toData(input, true)).toStrictEqual(expected);
    });

    it("handles nested objects", () => {
      const input = { snake_case: { nested: "value", list_values: ["1", "2.1", "a1", { member_id: "1" }] } };
      const expected = { snakeCase: { nested: "value", listValues: [1, 2.1, "a1", { memberId: 1 }] } };
      expect(toData(input, true)).toStrictEqual(expected);
    });
  });

  describe("toDto", () => {
    it("converts keys to snake_case", () => {
      const input = { camelCase: "value" };
      const expected = { camel_case: "value" };
      expect(toDto(input)).toStrictEqual(expected);
    });

    it("does not convert numbers to strings", () => {
      const input = { number: 1.23 };
      const expected = { number: 1.23 };
      expect(toDto(input)).toStrictEqual(expected);
    });

    it("handles nested objects", () => {
      const input = { camelCase: { nested: "value", listValue: [{ memberId: 1 }] } };
      const expected = { camel_case: { nested: "value", list_value: [{ member_id: 1 }] } };
      expect(toDto(input)).toStrictEqual(expected);
    });
  });
});
