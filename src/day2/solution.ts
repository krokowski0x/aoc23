import { readLines } from "../utils";

const part1 = (games: string[][][]) => {
  let idxSum = 0;

  // Go through all the games
  for (const [i, game] of games.entries()) {
    let gameFailed = false;

    // Go through all the subsets
    for (const [i, subset] of game.entries()) {
      // Go through each subset
      for (let i = 0; i < subset.length; i += 2) {
        const MAX_COLORS = { red: 12, green: 13, blue: 14 };
        if (Number(subset[i + 1]) > MAX_COLORS[subset[i]]) {
          gameFailed = true;
          break;
        }
      }
    }

    // If game passed, save its game number which is idx + 1
    if (!gameFailed) {
      idxSum += i + 1;
      gameFailed = false;
    }
  }
  return idxSum;
};

const part2 = (games: string[]) => {
  let powerSum = 0;

  // Go through all the games
  for (const [i, game] of games.entries()) {
    // Go through all the subsets
    const MAX_COLORS = { red: 0, green: 0, blue: 0 };
    for (const [i, subset] of game.entries()) {
      // Go through each subset
      for (let i = 0; i < subset.length; i += 2) {
        if (Number(subset[i + 1]) > MAX_COLORS[subset[i]]) {
          MAX_COLORS[subset[i]] = Number(subset[i + 1])
        }
      }
    }
    powerSum += Object.values(MAX_COLORS).reduce((a, b) => a*b, 1)
  }
  return powerSum;
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);

  const games = lines.map((line) => {
    const games = line.replaceAll(",", "").split(": ")[1].split("; ");
    const subsets = games.map((game) => game.split(" ").reverse());

    return subsets;
  });

  // Part 1
  console.log("Part 1:", part1(games));

  // Part 2
  console.log("Part 2:", part2(games));
})();

export { part1, part2 };
