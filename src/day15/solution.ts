import { readLines } from "../utils";

const HASH = (s: string[]): number => {
  let current = 0;

  for (const char of s) {
    current += char.charCodeAt(0)
    current *= 17;
    current = current % 256
  }

  return current;
}

const part1 = (input: string[]) => {
  let sum = 0;

  for (const value of input) {
    sum += HASH(value.split(''))
  }

  return sum;
};

const part2 = (platform: string[][]) => {

};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);
  const input = lines[0].split(',')

  // Part 1
  console.log("Part 1:", part1(input));

  // Part 2
  // console.log("Part 2:", part2(platform));
})();

export { part1, part2 };
