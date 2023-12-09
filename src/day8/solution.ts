import { readLines } from "../utils";

const DIRS = {
  L: 0,
  R: 1,
};

const part1 = (directions: string[], nodes: Record<string, string[]>) => {
  let steps = 0;
  let currentNode = nodes["AAA"];

  while (currentNode !== nodes["ZZZ"]) {
    for (const dir of directions) {
      currentNode = nodes[currentNode[DIRS[dir]]];
      steps++;
    }
  }

  return steps;
};

const part2 = (directions: string[], nodes: Record<string, string[]>) => {
  let steps = 0;
  let currentNodes = Object.entries(nodes).filter((node) =>
    node[0].endsWith("A")
  );

  console.log(currentNodes);

  outerLoop: while (true) {
    for (const dir of directions) {
      // console.log("\nDIR:", dir);
      for (let i = 0; i < currentNodes.length; i++) {
        const nextNode = currentNodes[i][1][DIRS[dir]];
        // console.log(currentNodes[i][0], "--->", nextNode );
        currentNodes[i] = [nextNode, nodes[nextNode]];
      }
      steps++;
      console.log(currentNodes.map((n) => n[0].split('').pop() === 'Z'))
      if (currentNodes.every((node) => node[0].endsWith("Z"))) break outerLoop;
    }
  }

  return steps;
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir);

  const directions = lines[0].split("");
  const nodes: Record<string, string[]> = {};

  lines.slice(2).forEach((line) => {
    const nodeParts = [...line.matchAll(/([\dA-Z]{3})/gi)];
    nodes[nodeParts[0][0]] = [nodeParts[1][0], nodeParts[2][0]];
  });

  // Part 1
  console.log("Part 1:", part1(directions, nodes));

  // Part 2
  console.log("Part 2:", part2(directions, nodes));
})();

export { part1, part2 };
