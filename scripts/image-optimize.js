const fs = require("fs-extra")
const path = require("path")
const sharp = require("sharp")

let sizes = [40, 80, 160, 320, 640]

let dir = "./public/assets/images/people"

let files = fs.readdirSync(dir)

fs.ensureDir(path.join(dir, "imgopt"))

// files object contains all files names
// log them on console
files
  .filter(file => {
    return file.includes("webp")
  })
  .forEach(file => {
    const f = `${dir}/${file}`

    const name = path.parse(file).name

    sizes.forEach(size => {
      out = `${dir}/imgopt/${name}-${size}.webp`

      console.log(out)
      sharp(f)
        .resize((width = size))
        .toFile(out)
    })
  })

sizes = [128, 256, 512, 1024, 2048]

dir = "./public/assets/images/header"

files = fs.readdirSync(dir)

fs.ensureDir(path.join(dir, "imgopt"))

// files object contains all files names
// log them on console
files
  .filter(file => {
    return file.includes("webp")
  })
  .forEach(file => {
    const f = `${dir}/${file}`

    const name = path.parse(file).name

    sizes.forEach(size => {
      out = `${dir}/imgopt/${name}-${size}.webp`

      console.log(out)
      sharp(f)
        .resize((width = size))
        .toFile(out)
    })
  })

dir = "./public/assets/images"

files = fs.readdirSync(dir)

fs.ensureDir(path.join(dir, "imgopt"))

// files object contains all files names
// log them on console
files
  .filter(file => {
    return file.includes("webp")
  })
  .forEach(file => {
    const f = `${dir}/${file}`

    const name = path.parse(file).name

    sizes.forEach(size => {
      out = `${dir}/imgopt/${name}-${size}.webp`

      console.log(out)
      sharp(f)
        .resize((width = size))
        .toFile(out)
    })
  })
