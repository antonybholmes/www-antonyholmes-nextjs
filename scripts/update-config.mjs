//const dotenv = require('dotenv')
import fs from "fs"
//const env = fs.readFileSync('env')
//const buf = Buffer.from(env)
//const currentConfig = dotenv.parse(buf)

// const updateEnv(config = {}, eol = '\n') {
//   const envContents = Object.entries({ ...currentConfig, ...config })
//     .map(([key, val]) => `${key}=${val}`)
//     .join(eol)
//   fs.writeFileSync('env', envContents)
// }

export function updateConfig(config = {}) {
  const currentConfig = JSON.parse(fs.readFileSync("./config.json"))
  const envContents = { ...currentConfig, ...config }

  fs.writeFileSync("./config.json", JSON.stringify(envContents, null, 2))
}