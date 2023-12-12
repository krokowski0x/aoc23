import { readLines } from "../utils";

const getAllSubsets = (a) =>
  a.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

const part1 = (records: any[][]) => {
  let sum = 0;

  for (const [i, record] of records.entries()) {
    let combinations = 0;
    let [springs, groups] = record;

    const unknowns = [...springs.matchAll(new RegExp(/\?/, "gi"))].map(
      (a) => a.index
    );

    for (const permutation of getAllSubsets(unknowns)) {
      const swapped: string[] = springs.split("").map((s, i) => {
        if (permutation.includes(i)) {
          return "#";
        } else if (s === "?") {
          return ".";
        } else {
          return s;
        }
      });

      const matching = [0];
      for (const element of swapped) {
        if (element === "#") {
          matching[matching.length - 1]++;
        } else {
          matching.push(0);
        }
      }

      if (matching.filter((el) => el !== 0).toString() === groups.toString()) {
        combinations++;
      }
    }

    sum += combinations;
    console.log(i, sum)
  }

  return sum;
};

const part2 = (records: any[][]) => {};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const records = lines.map((line) => [
    line.split(" ")[0],
    line.split(" ")[1].split(",").map(Number),
  ]);
  const recordsTimesFive = lines.map((line) => [
    Array(5).fill(line.split(" ")[0]).join('?'),
    Array(5).fill(line.split(" ")[1].split(",")).flat().map(Number),
  ])

  // Part 1
  console.log("Part 1:", part1(records));

  // Part 2
  console.log("Part 2:", part1(recordsTimesFive));
})();

export { part1, part2 };
