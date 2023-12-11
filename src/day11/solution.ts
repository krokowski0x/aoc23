import { readLines } from "../utils";

const prettyPrint = (map: string[][]) => {
  map.forEach((row) => console.log(row, "\n"));
};

const part1 = (map: string[][]) => {
  let num = 0;
  const locations = [];
  map = map.map((row, i) =>
    row.map((el, j) => {
      if (el === "#") {
        locations.push([i, j]);
        return num++;
      } else {
        return el;
      }
    })
  );
  prettyPrint(map)
  const pairs = locations.flatMap((v, i) =>
    locations.slice(i + 1).map((w) => [...v, ...w])
  );
  const distances = pairs.map(
    (pair) => Math.abs(pair[3] - pair[1]) + Math.abs(pair[2] - pair[0])
  );

  return distances.reduce((a, b) => a + b);
};

const part2 = (map: string[][]) => {
  let num = 0;
  const locations = [];
  map = map.map((row, i) =>
    row.map((el, j) => {
      if (el === "#") {
        locations.push([i, j]);
        return num++;
      } else {
        return el;
      }
    })
  );
  prettyPrint(map)
  const pairs = locations.flatMap((v, i) =>
    locations.slice(i + 1).map((w) => [...v, ...w])
  );
  const distances = []

  for (const pair of pairs) {
  let mils = 0;

    const [startRow, endRow] = [pair[1], pair[3]].sort()
    for (let i = startRow; i < endRow; i++) {
      if (map[i][pair[0]]=== 'X') {
        mils++
      }
    }

    const [startCol, endCol] = [pair[0], pair[2]].sort()
    for (let i = startCol; i < endCol; i++) {
      if (map[pair[1]][i]=== 'X') {
        mils++
      }
    }

    distances.push(Math.abs(pair[3] - pair[1]) + Math.abs(pair[2] - pair[0]) + mils*99)
  }

  console.log(distances)

  return distances.reduce((a, b) => a + b);
};

const transpose = (matrix: string[][]) => {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

const expand = (map: string[][]) => {
  let mapCopy = map;
  const newMap = transpose(mapCopy);
  const emptyRows = [];
  const emptyCols = [];

  mapCopy.forEach((row, i) => row.every((el) => el === ".") && emptyCols.push(i));
  newMap.forEach(
    (row, i) => row.every((el) => el === ".") && emptyRows.push(i)
  );
  let c = 0;
  emptyCols.forEach((row) => {
    mapCopy.splice(row + c, 0, new Array(mapCopy[0].length).fill("."));
    c++;
  });
  let carry = 0;
  emptyRows.forEach((col) => {
    mapCopy.forEach((row) => row.splice(col + carry, 0, "."));
    carry++;
  });

  return mapCopy;
};

const expand2 = (map: string[][]) => {
  let mapCopy = map;
  const newMap = transpose(mapCopy);
  const emptyRows = [];
  const emptyCols = [];

  mapCopy.forEach((row, i) => row.every((el) => el === ".") && emptyCols.push(i));
  newMap.forEach(
    (row, i) => row.every((el) => el === ".") && emptyRows.push(i)
  );
  let c = 0;
  emptyCols.forEach((row) => {
    mapCopy.splice(row + c, 0, new Array(mapCopy[0].length).fill("X"));
    c++;
  });
  let carry = 0;
  emptyRows.forEach((col) => {
    mapCopy.forEach((row) => row.splice(col + carry, 0, "X"));
    carry++;
  });

  return mapCopy;
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const map = lines.map((line) => line.split(""));
  // const expandedMap = expand(map);
  const expandedMap2 = expand2(map);
  // Part 1
  // console.log("Part 1:", part1(expandedMap));

  // Part 2
  console.log("Part 2:", part2(expandedMap2));
})();

export { part1, part2 };
