import { readLines } from "../utils";

const part1 = (races: number[][]) => {
  const racesWon = [];

  for (const race of races) {
    const [time, distance] = race;
    const winners = [];
    for (let i = 0; i < time; i++) {
      const speed = i;
      const distanceLeft = time - speed;
      if (distanceLeft * speed > distance) {
        winners.push(distanceLeft * speed)
      }
    }
    racesWon.push(winners.length)
  }

  return racesWon.reduce((a,b) => a*b)
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);

  const [times, distances] = lines.map((line) =>
    line
      .split(":")[1]
      .split(" ")
      .filter((num) => num !== "")
      .map(Number)
  );
  const races = times.map((time, i) => [time, distances[i]] )
  const singleRace = [[Number(times.join('')), Number(distances.join(''))]]

  // Part 1
  console.log("Part 1:", part1(races));

  // Part 2
  console.log("Part 2:", part1(singleRace));
})();

export { part1, part2 };
