import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 3", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);
    const map = lines.map((line) => line.split(""));

    test("Part 1", () => expect(part1(map)).toBe(4361));
    test("Part 2", () => expect(part2(map)).toBe(467835));
  });

  describe("Puzzle", async () => {
    const lines = await readLines(import.meta.dir);
    const map = lines.map((line) => line.split(""));

    test("Part 1", () => expect(part1(map)).toBe(543867));
    test("Part 2", () => expect(part2(map)).toBe(79613331));
  });
});
