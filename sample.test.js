import { add } from "./sample.js";

describe("Given function add", () => {
  describe("When we have 2 numbers", () => {
    test("Then if a = 1 and b = 2, it should return 2", () => {
      const a = 2;
      const b = 2;
      const result = 4;
      expect(add(a, b)).toBe(result);
    });
  });
});
