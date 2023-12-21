import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 21", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);

    test("Part 1", () => expect(part1(lines)).toBe(68));
    test("Part 2", () => expect(part2(lines)).toBe(2));
  });

  describe("Puzzle", async () => {
    const lines = await readLines(import.meta.dir);

    test("Part 1", () => expect(part1(lines)).toBe(1901217887));
    test("Part 2", () => expect(part2(lines)).toBe(905));
  });
});
