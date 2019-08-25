import { generateUniqueNumbersArray } from "./generate";

describe("Generate utilities", () => {
  it("generates an unique array", () => {
    const areAllArraysUnique =
      Array(10)
        .fill("")
        .map(() => generateUniqueNumbersArray(10))
        .map(hasDuplicates)
        .filter(r => r).length === 0;

    expect(areAllArraysUnique).toEqual(true);
  });
});

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
