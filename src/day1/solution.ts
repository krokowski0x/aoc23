import { readLines } from "../utils";

const findNumbers = (line: string): string[] => {
  let results: string[] = [];
  for (const [i, char] of line.split("").entries()) {
    if (!Number.isNaN(Number(char))) {
      results[i] = char;
    }
  };
  return results;
};

const findNumbersByName = (line: string, nums: string[]): string[] => {
  const DIGITS = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (let digit of Object.keys(DIGITS)) {
    let matches = [...line.matchAll(new RegExp(digit, "gi"))].map(
      (a) => a.index
    );
    if (matches.length) matches.forEach((i) => (nums[i] = DIGITS[digit]));
  }

  return nums;
};

const part1 = (lines: string[]) => {
  const results = lines.map((line) => {
    const nums = findNumbers(line).filter((r) => !!r);
    return Number(nums[0] + nums[nums.length - 1]);
  });

  return results.reduce((a, b) => a + b);
};

const part2 = (lines: string[]) => {
  const results = lines.map((line) => {
    const nums = findNumbersByName(line, findNumbers(line)).filter((r) => !!r);
    return Number(nums[0] + nums[nums.length - 1]);
  });
  return results.reduce((a, b) => a + b);
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);

  // Part 1
  console.log("Part 1:", part1(lines));

  // Part 2
  console.log("Part 2:", part2(lines));
})();

export { part1, part2 };
