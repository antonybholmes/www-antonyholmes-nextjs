const fs = require("fs-extra")
const path = require("path")
const sharp = require("sharp")

let sizes = [40, 80, 160, 320, 640]

let dir = "./public/assets/images/people"

let files = fs.readdirSync(dir)

fs.ensureDir(path.join(dir, "opt"))

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
      out = `${dir}/opt/${name}-${size}.webp`

      if (!fs.existsSync(out)) {
        console.log(out)
        sharp(f)
          .resize((width = size))
          .toFile(out)
      }
    })
  })

sizes = [128, 256, 512, 1024, 2048]

dir = "./public/assets/images/posts"

files = fs.readdirSync(dir)

fs.ensureDir(path.join(dir, "opt"))

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
      out = `${dir}/opt/${name}-${size}.webp`

      if (!fs.existsSync(out)) {
        console.log(out)
        sharp(f)
          .resize((width = size))
          .toFile(out)
      }
    })
  })
