import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 4", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);
    const games = lines.map((line) => {
      const [winningNumbers, myNumbers] = line
        .split(": ")[1]
        .replaceAll(/\s+/gi, ",")
        .split("|")
        .map((set) => set.split(",").filter((num) => num !== ""));
      return [winningNumbers, myNumbers];
    });

    test("Part 1", () => expect(part1(games)).toBe(13));
    test("Part 2", () => expect(part2(games)).toBe(30));
  });

  describe("Puzzle", async () => {
    const lines = await readLines(import.meta.dir);

    const games = lines.map((line) => {
      const [winningNumbers, myNumbers] = line
        .split(": ")[1]
        .replaceAll(/\s+/gi, ",")
        .split("|")
        .map((set) => set.split(",").filter((num) => num !== ""));
      return [winningNumbers, myNumbers];
    });

    test("Part 1", () => expect(part1(games)).toBe(25010));
    test("Part 2", () => expect(part2(games)).toBe(9924412));
  });
});
