import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 3", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);
    const [times, distances] = lines.map((line) =>
    line
      .split(":")[1]
      .split(" ")
      .filter((num) => num !== "")
      .map(Number)
  );
  const races = times.map((time, i) => [time, distances[i]] )
  const singleRace = [[Number(times.join('')), Number(distances.join(''))]]

    test("Part 1", () => expect(part1(races)).toBe(288));
    test("Part 2", () => expect(part1(singleRace)).toBe(71503));
  });

  describe("Puzzle", async () => {
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

    test("Part 1", () => expect(part1(races)).toBe(114400));
    test("Part 2", () => expect(part1(singleRace)).toBe(21039729));
  });
});
