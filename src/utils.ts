const readLines = async (dir: string, example: boolean = false): Promise<string[]> => {
  const file = Bun.file(dir + `${example ? "/example.txt" : "/input.txt"}`)
  const contents = await file.text()
  const lines = contents.split("\n")

  return lines
}

export { readLines }
