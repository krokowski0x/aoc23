import { readLines } from "../utils";

const floodFill = (image, sr, sc, newColor) => {
  const current = image[sr][sc];

  if (current === newColor){
      return image;
  }

  fill(image, sr, sc, newColor, current);

  return image;
};

const fill = (image, sr, sc, newColor, current) => {
  if (sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[sr].length - 1) {
    return;
  }

   image[sr][sc] = newColor;
   console.log(image.map(line => line.join('')).join('\n'));

   fill(image, sr - 1, sc, newColor, current);
   fill(image, sr + 1, sc, newColor, current);
   fill(image, sr, sc - 1, newColor, current);
   fill(image, sr, sc + 1, newColor, current);

}

const countArea = (map: string[][]) => {
  let sum = 0;

  for (const row of map) {
    sum += row.filter((char) => char === 'O').length
  }

  return sum
}

const part1 = async (plan: string[][]) => {
  const row = plan.findIndex(row => row.includes('S'));
  const col = plan[row].indexOf('S');
  const filledMap = floodFill(plan, row, col, 'O');

  await Bun.write('src/day21/out.txt', filledMap.map(line => line.join('')).join('\n'));

  const sum = countArea(filledMap);

  return sum;
};

const part2 = (plan: string[][]) => {

};

(async () => {
  Error.stackTraceLimit = 1000000;
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const plan = lines.map((line) => line.split(''));

  // Part 1
  console.log("Part 1:", await part1(plan));

  // Part 2
  // console.log("Part 2:", part2(platform));
})();

export { part1, part2 };
