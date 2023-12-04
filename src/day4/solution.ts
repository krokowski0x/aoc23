import { readLines } from "../utils";

const part1 = (games: string[][][]) => {
  let sum = 0;
  for (const game of games) {
    let pairs = 0;
    const [winningNumbers, myNumbers] = game;
    const winningMap = {};
    for (const winningNum of winningNumbers) {
      winningMap[winningNum] = true;
    }

    for (const myNum of myNumbers) {
      if (myNum in winningMap) {
        pairs++;
      }
    }

    if (pairs > 0) {
      sum += 2 ** (pairs - 1);
    }
  }
  return sum;
};

const part2 = (games: string[][][]) => {
  const cards = {};

  for (let [i, game] of games.entries()) {
    let pairs = 0;
    const [winningNumbers, myNumbers] = game;
    const winningMap = {};
    for (const winningNum of winningNumbers) {
      winningMap[winningNum] = true;
    }

    for (const myNum of myNumbers) {
      if (myNum in winningMap) {
        pairs++;
      }
    }

    for (let j = i + 1; j < i + pairs + 1; j++) {
      if (!cards[i + 1]) {
        cards[i + 1] = Array(Array());
      }
      cards[i + 1][0].push(j + 1);
    }

    for (let g = 1; g < games.length + 1; g++) {
      if (!cards[g]) cards[g] = Array(Array());
    }
  }

  for (const card of Object.values(cards)) {
    card.forEach((c) =>
      c.forEach((num) => num && cards[num].push(cards[num][0]))
    );
  }

  return Object.values(cards).reduce((acc, val) => acc + val.length, 0);
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);

  const games = lines.map((line) => {
    const [winningNumbers, myNumbers] = line
      .split(": ")[1]
      .replaceAll(/\s+/gi, ",")
      .split("|")
      .map((set) => set.split(",").filter((num) => num !== ""));
    return [winningNumbers, myNumbers];
  });
  // Part 1
  console.log("Part 1:", part1(games));

  // Part 2
  console.log("Part 2:", part2(games));
})();

export { part1, part2 };
