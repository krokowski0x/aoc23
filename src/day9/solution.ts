import { readLines } from "../utils";

const part1 = (histories: number[][]) => {
  let sum = 0;

  for (const history of histories) {
    const diffs = [history];

    while (!diffs[diffs.length - 1].every((num) => num === 0)) {
      let prevDiff = diffs[diffs.length - 1];
      let currentDiff = [];
      for (let i = 0; i < prevDiff.length; i++) {
        currentDiff.push(prevDiff[i + 1] - prevDiff[i]);
      }
      diffs.push(currentDiff.filter((num) => !Number.isNaN(num)));
    }

    diffs[diffs.length - 1].push(0);

    for (let j = diffs.length - 1; j > 0; j--) {
      let prev = diffs[j - 1];
      let curr = diffs[j];
      prev.push(prev[prev.length - 1] + curr[curr.length - 1]);
    }

    sum += diffs[0].pop();
  }
  return sum;
};

const part2 = (histories: number[][]) => {
  let sum = 0;

  for (const history of histories) {
    const diffs = [history];

    while (!diffs[diffs.length - 1].every((num) => num === 0)) {
      let prevDiff = diffs[diffs.length - 1];
      let currentDiff = [];
      for (let i = 0; i < prevDiff.length; i++) {
        currentDiff.push(prevDiff[i + 1] - prevDiff[i]);
      }
      diffs.push(currentDiff.filter((num) => !Number.isNaN(num)));
    }

    diffs[diffs.length - 1].unshift(0);

    for (let j = diffs.length - 1; j > 0; j--) {
      let prev = diffs[j - 1];
      let curr = diffs[j];
      prev.unshift(prev[0] - curr[0]);
    }

    sum += diffs[0].shift();
  }
  return sum;
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const histories = lines.map((line) => line.split(" ").map(Number));

  // // Part 1
  console.log("Part 1:", part1(histories));

  // // Part 2
  console.log("Part 2:", part2(histories));
})();

export { part1, part2 };
