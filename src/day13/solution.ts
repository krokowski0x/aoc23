import { readLines } from "../utils";

const transpose = (matrix: string[][]) => {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

const part1 = (maps: string[][]) => {
  let rowSum = 0;
  let colSum = 0;

  for (const map of maps) {
    let rows = [];
    let cols = [];

    for (let i = 1; i < map.length; i++) {
      let j = i - 1;
      if (map[j].toString() === map[i].toString()) {
        rows = [i, 0];
      }
      while (
        j >= 0 &&
        i < map.length &&
        map[j].toString() === map[i].toString()
      ) {
        rows[1]++;
        j--;
        i++;
      }
      if (rows[0] - rows[1] === 0 || rows[0] + rows[1] === map.length) cols = [];
    }

    const transposed = transpose(map);

    for (let i = 1; i < transposed.length; i++) {
      let j = i - 1;
      if (transposed[j].toString() === transposed[i].toString()) {
        cols = [i, 0];
      }
      while (
        j >= 0 &&
        i < transposed.length &&
        transposed[j].toString() === transposed[i].toString()
      ) {
        cols[1]++;
        j--;
        i++;
      }
      if (cols[0] - cols[1] === 0 || cols[0] + cols[1] === transposed.length) rows = [];
    }
    console.log(rows, cols)

    // if ((rows.length === 0 && cols.length === 0) || rows[1] === cols[1]) {
    //   if (rows[0] < cols[0]) rowSum += rows[0]
    //   else colSum += cols[0];
    // }

    if (rows.length > 0) {
      if (!cols.length || rows[1] > cols[1]) {
        rowSum += rows[0];
        console.log(rows[0]);
      }
    }

    if (cols.length > 0) {
      if (!rows.length || rows[1] < cols[1]) {
        colSum += cols[0];
        console.log(cols[0]);
      }
    }

  }

  return colSum + 100 * rowSum;
};

const part2 = (records: any[][]) => {};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);
  const maps = [[]];
  for (const line of lines) {
    if (line !== "") {
      maps[maps.length - 1].push(line.split(""));
    } else {
      maps.push([]);
    }
  }

  // Part 1
  console.log("Part 1:", part1(maps)); // 28871 - 35425

  // Part 2
  // console.log("Part 2:", part2(lines));
})();

export { part1, part2 };
