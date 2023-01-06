/**
 * Parse a path name into its consituents.
 *
 * @param path a forward slash '/' delimited string.
 * @returns an object containing the full path, the directory,
 * the file name (wihout directory), the name of the file
 * without extension and the file extension.
 */
export function parse(path: string) {
  let lastIndex = path.lastIndexOf("/")
  const dir = path.slice(0, lastIndex)
  const file = path.slice(lastIndex + 1)
  lastIndex = file.lastIndexOf(".")
  const name = file.slice(0, lastIndex)
  const ext = file.slice(lastIndex + 1)
  return { path, dir, file, name, ext }
}
