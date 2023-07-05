import { describe, expect, it } from "vitest";
import { sumNumbers } from "../utils/math-function";

describe("Testing the function sumNumber", () => {
  it("should return result of 5 if sumNumbers is called with 2 and 3", () => {
    //ARRANGE
    const numberOne = 3;
    const numberTwo = 2;
    //ACT
    const result = sumNumbers(numberOne, numberTwo);
    //ASSERT
    expect(result).toEqual(5);
  });

  it("should return undefined if no argument is provided for numberTwo parameter", () => {
    //ARRANGE
    const numberOne = 3;
    //ACT
    const result = sumNumbers(numberOne);
    //ASSERT
    expect(result).toEqual(undefined);
  });
});
