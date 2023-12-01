const readLines = async (dir: string): Promise<string[]> => {
  const file = Bun.file(dir + "/input.txt")
  const contents = await file.text()
  const lines = contents.split("\n")

  return lines
}

export { readLines }
