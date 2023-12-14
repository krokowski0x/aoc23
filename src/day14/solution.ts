import { readLines } from "../utils";

const transpose = (matrix: string[][]) => {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

const part1 = (platform: string[][]) => {
  const tilted = [];
  let sum = 0;
  // Tilt
  for (let [idx, row] of platform.entries()) {
    // console.log("BEFORE", row.join(""));
    let lastRock = -1;
    let result = [];
    for (let i = -1; i < row.length; i++) {
      if (row[i + 1] === "#" || i + 1 === row.length) {
        if (row.slice(lastRock + 1, i + 1).includes("O")) {
          result.push(
            row
              .slice(lastRock + 1, i + 1)
              .sort()
              .reverse()
          );
          if (i + 1 !== row.length) result.push("#");
        } else {
          result.push(row.slice(lastRock + 1, i + 2));
        }

        lastRock = i + 1;
      }
    }
    result = result.flat();
    console.log("AFTER ", result.join(""));
    tilted[idx] = result;
  }

  // Count
  for (const tiltedRow of tilted) {
    for (let i = 0; i < tiltedRow.length; i++) {
      if (tiltedRow[i] === "O") {
        sum += tiltedRow.length - i;
      }
    }
  }

  return sum;
};

const part2 = (platform: string[][]) => {
  const west = platform;
  const north = transpose(platform);
  const east = platform.map(row => row.reverse());
  const south = transpose(east)

};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const platform = lines.map((line) => line.split(""));

  // Part 1
  // console.log("Part 1:", part1(transpose(platform)));

  // Part 2
  console.log("Part 2:", part2(platform));
})();

export { part1, part2 };
