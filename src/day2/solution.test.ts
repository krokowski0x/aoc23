import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 2", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);
    const games = lines.map((line) => {
      const games = line.replaceAll(",", "").split(": ")[1].split("; ");
      const subsets = games.map((game) => game.split(" ").reverse());

      return subsets;
    });
    test("Part 1", () => expect(part1(games)).toBe(8));
    test("Part 2", () => expect(part2(games)).toBe(2286));
  });

  describe("Puzzle", async () => {
    const lines = await readLines(import.meta.dir);
    const games = lines.map((line) => {
      const games = line.replaceAll(",", "").split(": ")[1].split("; ");
      const subsets = games.map((game) => game.split(" ").reverse());

      return subsets;
    });
    test("Part 1", () => expect(part1(games)).toBe(3099));
    test("Part 2", () => expect(part2(games)).toBe(72970));
  });
});
