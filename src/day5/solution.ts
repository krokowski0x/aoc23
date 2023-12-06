import { readLines } from "../utils";

const part1 = (alamanc: Record<string, number[][]>) => {
  const locations = [];
  const [seeds, ...maps] = Object.keys(alamanc);

  for (const seed of alamanc[seeds]) {
    let key = seed;

    for (const map of maps) {
      for (const values of alamanc[map]) {
        if (key >= values[0] && key <= values[1]) {
          key += values[2];
          break;
        }
      }
    }
    locations.push(key);
  }

  return locations.sort((a, b) => a - b)[0];
};

const part2 = (alamanc: Record<string, number[][]>) => {};

(async () => {
  // Read file
  const [seeds, ...lines] = await readLines(import.meta.dir);
  const almanac = { seeds: seeds.split(": ")[1].split(" ").map(Number) };

  let activeKey = "";

  lines
    .filter((line) => line !== "")
    .forEach((line) => {
      if (line === "") {
        return;
      }
      if (line.includes("map")) {
        activeKey = line.split(" map:")[0];
        almanac[activeKey] = Array();
      } else {
        const [destinationStart, sourceStart, range] = line
          .split(" ")
          .map(Number);

        almanac[activeKey].push([
          sourceStart,
          sourceStart + range - 1,
          destinationStart - sourceStart,
        ]);
      }
    });

  // Part 1
  console.log("Part 1:", part1(almanac));

  // Part 2
  // console.log("Part 2:", part2(almanac));
})();

export { part1, part2 };
