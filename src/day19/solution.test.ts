import { expect, test, describe } from "bun:test";
import { readLines } from "../utils";
import { part1, part2 } from "./solution";

describe("Day 19", async () => {
  describe("Example", async () => {
    const lines = await readLines(import.meta.dir, true);
    const emptyLine = lines.findIndex(line => line === '')
    const workflows = {};
    const workflowLines = lines.slice(0, emptyLine).map((line) => line.replace('{', ',').replace('}', '').split(','))
    workflowLines.forEach((line) => {
      workflows[line[0]] = [];
      for (const condition of line.slice(1)) {
        if (condition.includes(':')) {
          workflows[line[0]].push(condition.split(':'))
        } else {
          workflows[line[0]].push([null, condition])
        }
      }
    })
    const parts = lines.slice(emptyLine+1).map((line) => line.replace('{', '').replace('}', '').split(',').map(c => c.slice(2)))


    test("Part 1", () => expect(part1(workflows, parts)).toBe(19114));
    test("Part 2", () => expect(part2(workflows, parts)).toBe(167409079868000));
  });

  describe("Puzzle", async () => {
    const lines = await readLines(import.meta.dir);
    const emptyLine = lines.findIndex(line => line === '')
    const workflows = {};
    const workflowLines = lines.slice(0, emptyLine).map((line) => line.replace('{', ',').replace('}', '').split(','))
    workflowLines.forEach((line) => {
      workflows[line[0]] = [];
      for (const condition of line.slice(1)) {
        if (condition.includes(':')) {
          workflows[line[0]].push(condition.split(':'))
        } else {
          workflows[line[0]].push([null, condition])
        }
      }
    })
    const parts = lines.slice(emptyLine+1).map((line) => line.replace('{', '').replace('}', '').split(',').map(c => c.slice(2)))


    test("Part 1", () => expect(part1(workflows, parts)).toBe(353553));
    test("Part 2", () => expect(part2(workflows, parts)).toBe(null));
  });
});
