import { describe, expect, it } from "vitest";
import { sum } from "./utils";

describe("#sum", () => {
  it("should add the numbers passed to it", () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(a + b);
    expect({}).toEqual({});
    expect(0).not.toBe(1);
  });
});
