import fs from "fs"
import path from "path"

export function getAllFiles(dir: string, ret: string[] = []) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const p = path.join(dir, "/", file) //`${dirPath}/${file}`
    if (fs.statSync(p).isDirectory()) {
      getAllFiles(p, ret)
    } else {
      ret.push(p) //path.join(dirPath, "/", file))
    }
  })

  return ret
}

export function getAllMDFiles(dir: string): string[] {
  return getAllFiles(dir).filter(file => file.endsWith(".md"))
}
