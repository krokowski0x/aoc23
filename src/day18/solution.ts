import { readLines } from "../utils";

const directions = {
  'R': [0, 1],
  'U': [-1, 0],
  'L': [0, -1],
  'D': [1, 0]
}

const floodFill = (image, sr, sc, newColor) => {
  //Get the input which needs to be replaced.
  const current = image[sr][sc];

  //If the newColor is same as the existing
  //Then return the original image.
  if(current === newColor){
      return image;
  }

  //Other wise call the fill function which will fill in the existing image.
  fill(image, sr, sc, newColor, current);

  //Return the image once it is filled
  return image;
};

const fill = (image, sr, sc, newColor, current) => {
  //If row is less than 0
  if(sr < 0){
      return;
  }

  //If column is less than 0
  if(sc < 0){
      return;
  }

  //If row is greater than image length
  if(sr > image.length - 1){
      return;
  }

  //If column is greater than image length
  if(sc > image[sr].length - 1){
      return;
  }

  //If the current pixel is not which needs to be replaced
  if(image[sr][sc] !== current){
      return;
  }

   //Update the new color
   image[sr][sc] = newColor;


   //Fill in all four directions
   //Fill Prev row
   fill(image, sr - 1, sc, newColor, current);

   //Fill Next row
   fill(image, sr + 1, sc, newColor, current);

   //Fill Prev col
   fill(image, sr, sc - 1, newColor, current);

   //Fill next col
   fill(image, sr, sc + 1, newColor, current);

}

const buildPath = (plan: string[][]) => {
  const size = plan.reduce((prev, curr) => {
    if (curr[0] === 'R' || curr[0] === 'L') {
      prev[0] += Number(curr[1])
    }

    if (curr[0] === 'D' || curr[0] === 'U') {
      prev[1] += Number(curr[1])
    }

    return prev
  }, [1,1])

  let map = new Array(size[0]).fill('.').map(() => new Array(size[1]).fill('.'));
  map[Math.ceil(size[1] / 2)][Math.ceil(size[0] / 2)] = '#'
  let pointer = [Math.ceil(size[1] / 2),Math.ceil(size[0] / 2)]

  for (const step of plan) {
    const [dir, distance, color] = step;

    for (let i = 0; i < Number(distance); i++) {
      pointer[0] += directions[dir][0]
      pointer[1] += directions[dir][1]

      map[pointer[0]][pointer[1]] = '#'
    }
  }

  return map
};

const countArea = (map: string[][]) => {
  let sum = 0;

  for (const row of map) {
    sum += row.filter((char) => char === '#').length
  }

  return sum
}

const part1 = (plan: string[][]) => {
  const map = buildPath(plan)
  const filledMap = floodFill(map, 900, 1100, '#');
  const sum = countArea(filledMap);

  return sum;
};

const part2 = (plan: string[][]) => {

};

(async () => {
  Error.stackTraceLimit = 1000000;
  // Read file
  const lines = await readLines(import.meta.dir);
  const plan = lines.map((line) => line.split(' '));
  // await Bun.write('src/day18/out-example.txt', buildPath(plan).map(line => line.join('')).join('\n'));
  // await Bun.write('src/day18/out-filled-example.txt', floodFill(buildPath(plan), 11, 15, '#').map(line => line.join('')).join('\n'));
  // await Bun.write('src/day18/out.txt', buildPath(plan).map(line => line.join('')).join('\n'));
  // await Bun.write('src/day18/out-filled.txt', floodFill(buildPath(plan), 900, 1068, '#').map(line => line.join('')).join('\n'));

  // Part 1
  console.log("Part 1:", part1(plan)); // < 92789

  // Part 2
  // console.log("Part 2:", part2(platform));
})();

export { part1, part2 };
