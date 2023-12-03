import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 1", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);
    test("Part 1", () => expect(part1(lines)).toBe(142));
    test("Part 2", () => expect(part2(lines)).toBe(281));
  });

  describe("Puzzle", async () => {
    const lines = await readLines(import.meta.dir);
    test("Part 1", () => expect(part1(lines)).toBe(54597));
    test("Part 2", () => expect(part2(lines)).toBe(54504));
  });
});
