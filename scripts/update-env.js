//const dotenv = require('dotenv')
const fs = require("fs")
//const env = fs.readFileSync('env')
//const buf = Buffer.from(env)
//const currentConfig = dotenv.parse(buf)

// const updateEnv(config = {}, eol = '\n') {
//   const envContents = Object.entries({ ...currentConfig, ...config })
//     .map(([key, val]) => `${key}=${val}`)
//     .join(eol)
//   fs.writeFileSync('env', envContents)
// }

function updateEnv(config = {}) {
  const currentConfig = JSON.parse(fs.readFileSync("./env.json"))
  const envContents = { ...currentConfig, ...config }

  fs.writeFileSync("./env.json", JSON.stringify(envContents, null, 2))
}

module.exports = updateEnv
