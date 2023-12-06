import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 4", async () => {
  describe("Example", async () => {
    const [seeds, ...lines] = await readLines(import.meta.dir, true);
    const almanac = { seeds: seeds.split(": ")[1].split(" ").map(Number) };

    let activeKey = "";

    lines
      .filter((line) => line !== "")
      .forEach((line) => {
        if (line === "") {
          return;
        }
        if (line.includes("map")) {
          activeKey = line.split(" map:")[0];
          almanac[activeKey] = Array();
        } else {
          const [destinationStart, sourceStart, range] = line
            .split(" ")
            .map(Number);

          almanac[activeKey].push([
            sourceStart,
            sourceStart + range - 1,
            destinationStart - sourceStart,
          ]);
        }
      });

    test("Part 1", () => expect(part1(almanac)).toBe(35));
    test("Part 2", () => expect(part2(almanac)).toBe(46));
  });

  describe("Puzzle", async () => {
    const [seeds, ...lines] = await readLines(import.meta.dir);
    const almanac = { seeds: seeds.split(": ")[1].split(" ").map(Number) };

    let activeKey = "";

    lines
      .filter((line) => line !== "")
      .forEach((line) => {
        if (line === "") {
          return;
        }
        if (line.includes("map")) {
          activeKey = line.split(" map:")[0];
          almanac[activeKey] = Array();
        } else {
          const [destinationStart, sourceStart, range] = line
            .split(" ")
            .map(Number);

          almanac[activeKey].push([
            sourceStart,
            sourceStart + range - 1,
            destinationStart - sourceStart,
          ]);
        }
      });

    test("Part 1", () => expect(part1(almanac)).toBe(1181555926));
    test("Part 2", () => expect(part2(almanac)).toBe(null));
  });
});
