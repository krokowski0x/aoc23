import { readLines } from "../utils";

const BFS = (input: number[][]) => {};

const part1 = (input: number[][]) => {

};

const part2 = (input: number[][]) => {

};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const city = lines.map((line) => line.split('').map(Number));

  // Part 1
  console.log("Part 1:", part1(city));

  // Part 2
  // console.log("Part 2:", part2(platform));
})();

export { part1, part2 };
