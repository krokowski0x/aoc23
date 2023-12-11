import { readLines } from "../utils";

const PIPES = {
  "|": [[1, 0], [-1, 0]], // a vertical pipe connecting north and south.
  "-": [[0, 1], [0, -1]], // a horizontal pipe connecting east and west.
  L: [[1, -1], [-1, 1]], // a 90-degree bend connecting north and east.
  J: [[-1, -1], [1, 1]], // a 90-degree bend connecting north and west.
  "7": [[-1, 1], [1, -1]], // a 90-degree bend connecting south and west.
  F: [[1, 1], [-1, -1]], // a 90-degree bend connecting south and east.
};

const part1 = (histories: number[][]) => {};

const part2 = (histories: number[][]) => {};

const buildGraph = (map: string[][], start: number[]) => {
  const directions = [[0, 1],[1, 0],[0, -1],[-1, 0]];
  const queue = [];
  let [i, j] = start;

  for (let dir of directions) {
    if (i + dir[0] >= 0 &&i + dir[0] < map.length &&j + dir[1] >= 0 &&j + dir[1] < map[0].length) {
      const adjacent = map[i + dir[0]][j + dir[1]];
      if (adjacent !== '.') {
        console.log(adjacent, PIPES[adjacent], dir, PIPES[adjacent].join('').includes(String(dir)))
        queue.push([i + dir[0], j + dir[1]])
      }
    }
  }

  console.log(queue)

//   const result = [];
//   while (queue.length) {
//     const vertex = queue.shift();

//       result.push(vertex);
//       let [i,j] = vertex
//         if (i + dir[0] >= 0 &&i + dir[0] < map.length &&j + dir[1] >= 0 &&j + dir[1] < map[0].length) {
//           const adjacent = map[i + dir[0]][j + dir[1]];
//           if (!['.', 'S', 'X'].includes(adjacent)) {

//             console.log(adjacent, PIPES[adjacent], dir)
//             map[i + dir[0]][j + dir[1]] = 'X'
//             queue.push([i + dir[0], j + dir[1]])

//         }
//         }
// }
// return result.length / 2;
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const map = lines.map((line) => line.split(""));
  const startRow = map.findIndex((row) => row.includes("S"));
  const startCol = map[startRow].indexOf("S");
  const graph = buildGraph(map, [startRow, startCol]);

  console.log(graph);

  // // Part 1
  // console.log("Part 1:", part1(histories));

  // // Part 2
  // console.log("Part 2:", part2(histories));
})();

export { part1, part2 };
