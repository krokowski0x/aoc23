import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 7", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);
    const hands = lines.map((line) => line.split(" "));

    test("Part 1", () => expect(part1(hands)).toBe(6440));
    // test("Part 2", () => expect(part2(hands)).toBe(5905));
  });

  describe("Puzzle", async () => {
    const lines = await readLines(import.meta.dir);
    const hands = lines.map((line) => line.split(" "));

    test("Part 1", () => expect(part1(hands)).toBe(251136060));
    // test("Part 2", () => expect(part2(hands)).toBe(249400220));
  });
});
