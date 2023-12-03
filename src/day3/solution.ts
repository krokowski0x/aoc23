import { readLines } from "../utils";

const part1 = (map: string[][]) => {
  let sum = 0;
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (Number.isInteger(Number(map[i][j]))) {
        let currentNumber = "";
        let isPartNumber = false;
        while (!Number.isNaN(Number(map[i][j]))) {
          currentNumber += map[i][j];
          for (let dir of directions) {
            if (i + dir[0] >= 0 && i + dir[0] < map.length && j + dir[1] >= 0 && j + dir[1] < map[0].length) {
              const adjacent = map[i + dir[0]][j + dir[1]];
              if (adjacent.match(/([^\.\d])/)) {
                isPartNumber = true;
              }
            }

          }
          j++;
        }
        if (isPartNumber) {
          sum += Number(currentNumber);
        }
      }
    }
  }
  return sum
};

const part2 = (map: string[][]) => {
  const gears = {};
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (Number.isInteger(Number(map[i][j]))) {
        let currentNumber = "";
        let gearNumber = null;
        while (!Number.isNaN(Number(map[i][j]))) {
          currentNumber += map[i][j];
          for (let dir of directions) {
            if (i + dir[0] >= 0 && i + dir[0] < map.length && j + dir[1] >= 0 && j + dir[1] < map[0].length) {
              const adjacent = map[i + dir[0]][j + dir[1]];
              if (adjacent.match(/([^\.\d])/)) {
                if (adjacent === '*') {
                  gearNumber = `${i + dir[0]},${j + dir[1]}`
                }
              }
            }

          }
          j++;
        }

        if (gearNumber) {
          if (gears[gearNumber]) {
            gears[gearNumber].push(Number(currentNumber))
          } else {
            gears[gearNumber] = [Number(currentNumber)]
          }
        }
      }
    }
  }
  let sum = Object.values(gears).reduce((prev, curr) => {
    if (curr.length === 2) {
      prev += curr[0] * curr[1]
    }

    return prev
  }, 0)
  return sum
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);
  const map = lines.map((line) => line.split(""));

  // Part 1
  console.log("Part 1:", part1(map));

  // Part 2
  console.log("Part 2:", part2(map));
})();

export { part1, part2 };
