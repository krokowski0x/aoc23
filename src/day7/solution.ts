import { readLines } from "../utils";

const part1 = (hands: string[][]) => {
  const ranking = {
    FIVE: [],
    FOUR: [],
    FULL: [],
    THREE: [],
    TWO_PAIR: [],
    ONE_PAIR: [],
    HIGH: [],
  };
  for (const hand of hands) {
    const CARDS = {
      A: 0,
      K: 0,
      Q: 0,
      J: 0,
      T: 0,
      "9": 0,
      "8": 0,
      "7": 0,
      "6": 0,
      "5": 0,
      "4": 0,
      "3": 0,
      "2": 0,
    };

    const [cards, bid] = hand;

    for (const card of cards.split("")) {
      CARDS[card]++;
    }

    const mapHandToValues = hand[0]
      .split("")
      .map(
        (h) =>
          [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "T",
            "J",
            "Q",
            "K",
            "A",
          ].findIndex((num) => num === h) + 10
      )
      .join("");

    const cardCounds = Object.values(CARDS);
    if (cardCounds.includes(5)) {
      ranking["FIVE"].push([...hand, mapHandToValues]);
    } else if (cardCounds.includes(4)) {
      ranking["FOUR"].push([...hand, mapHandToValues]);
    } else if (cardCounds.includes(3)) {
      if (cardCounds.includes(2))
        ranking["FULL"].push([...hand, mapHandToValues]);
      else ranking["THREE"].push([...hand, mapHandToValues]);
    } else if (cardCounds.includes(2)) {
      cardCounds[cardCounds.findIndex((i) => i === 2)] = 0;
      if (cardCounds.includes(2))
        ranking["TWO_PAIR"].push([...hand, mapHandToValues]);
      else ranking["ONE_PAIR"].push([...hand, mapHandToValues]);
    } else {
      ranking["HIGH"].push([...hand, mapHandToValues]);
    }
  }

  for (const [key, values] of Object.entries(ranking)) {
    ranking[key] = values.sort((a, b) => Number(b[2]) - Number(a[2]));
  }

  let sum = 0;

  for (const [i, values] of Object.values(ranking).flat().reverse().entries()) {
    sum += (i + 1) * Number(values[1]);
  }
  return sum;
};

const part2 = (hands: string[][]) => {
  const ranking = {
    FIVE: [],
    FOUR: [],
    FULL: [],
    THREE: [],
    TWO_PAIR: [],
    ONE_PAIR: [],
    HIGH: [],
  };
  for (const hand of hands) {
    const CARDS = {
      A: 0,
      K: 0,
      Q: 0,
      T: 0,
      J: 0,
      "9": 0,
      "8": 0,
      "7": 0,
      "6": 0,
      "5": 0,
      "4": 0,
      "3": 0,
      "2": 0,
    };

    const [cards, bid] = hand;

    for (const card of cards.split("")) {
      CARDS[card]++;
    }

    if (CARDS["J"] > 0) {
      let highest = Object.entries(CARDS)[0];
      for (const [key, value] of Object.entries(CARDS).filter(
        (e) => e[0] !== "J"
      )) {
        if (value > highest[1]) highest = [key, value];
      }
      CARDS[highest[0]] += CARDS["J"];
      CARDS["J"] = 0;

    }

    const mapHandToValues = hand[0]
      .split("")
      .map(
        (h) =>
          [
            "J",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "T",
            "Q",
            "K",
            "A",
          ].findIndex((num) => num === h) + 10
      )
      .join("");

    const cardCounds = Object.values(CARDS);
    if (cardCounds.includes(5)) {
      ranking["FIVE"].push([...hand, mapHandToValues]);
    } else if (cardCounds.includes(4)) {
      ranking["FOUR"].push([...hand, mapHandToValues]);
    } else if (cardCounds.includes(3)) {
      if (cardCounds.includes(2))
        ranking["FULL"].push([...hand, mapHandToValues]);
      else ranking["THREE"].push([...hand, mapHandToValues]);
    } else if (cardCounds.includes(2)) {
      cardCounds[cardCounds.findIndex((i) => i === 2)] = 0;
      if (cardCounds.includes(2))
        ranking["TWO_PAIR"].push([...hand, mapHandToValues]);
      else ranking["ONE_PAIR"].push([...hand, mapHandToValues]);
    } else {
      ranking["HIGH"].push([...hand, mapHandToValues]);
    }
  }

  for (const [key, values] of Object.entries(ranking)) {
    ranking[key] = values.sort((a, b) => Number(b[2]) - Number(a[2]));
  }

  let sum = 0;

  for (const [i, values] of Object.values(ranking).flat().reverse().entries()) {
    sum += (i + 1) * Number(values[1]);
  }
  return sum;
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);

  const hands = lines.map((line) => line.split(" "));

  // Part 1
  console.log("Part 1:", part1(hands));

  // Part 2
  console.log("Part 2:", part2(hands));
})();

export { part1, part2 };
