import { readLines } from "../utils";

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

const part1 = (workflows: Record<string, string[]>, parts: string[][]) => {
  let sum = 0;

  for (const part of parts) {
    let [x, m, a, s] = part;
    let currentWorkflow = "in";
    let currentStep = 0;

    while (true) {
      let [condition, destination] = workflows[currentWorkflow][currentStep];

      if (
        !condition ||
        eval(
          condition
            .replace("x", x)
            .replace("m", m)
            .replace("a", a)
            .replace("s", s)
        )
      ) {
        if (destination === "A") {
          sum += part.reduce((a, b) => a + Number(b), 0);
          break;
        }

        if (destination === "R") {
          break;
        }

        currentWorkflow = destination;
        currentStep = 0;
      } else {
        currentStep++;
      }
    }
  }

  return sum;
};

const part2 = (workflows: Record<string, string[]>) => {
  let sum = 0;
  for (let i = 1; i < 4001; i++) {
    for (let j = 1; j < 4001; j++) {
      for (let k = 1; k < 4001; k++) {
        for (let l = 1; l < 4001; l++) {
          for (const permutation of permutator([i.toString(), j.toString(), k.toString(), l.toString()])) {
            sum += part1(workflows, [permutation]);
          }
        }
      }
    }
  }

  return sum;
};

(async () => {
  // Read file
  const lines = await readLines(import.meta.dir, true);
  const emptyLine = lines.findIndex((line) => line === "");
  const workflows = {};
  const workflowLines = lines
    .slice(0, emptyLine)
    .map((line) => line.replace("{", ",").replace("}", "").split(","));
  workflowLines.forEach((line) => {
    workflows[line[0]] = [];
    for (const condition of line.slice(1)) {
      if (condition.includes(":")) {
        workflows[line[0]].push(condition.split(":"));
      } else {
        workflows[line[0]].push([null, condition]);
      }
    }
  });
  // const parts = lines.slice(emptyLine + 1).map((line) =>
  //   line
  //     .replace("{", "")
  //     .replace("}", "")
  //     .split(",")
  //     .map((c) => c.slice(2))
  // );

  // // Part 1
  // console.log("Part 1:", part1(workflows, parts));

  // Part 2
  console.log("Part 2:", part2(workflows));
})();

export { part1, part2 };
