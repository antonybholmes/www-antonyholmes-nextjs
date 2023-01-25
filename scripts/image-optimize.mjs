import fs from "fs-extra"
import path from "path"
import sharp from "sharp"

let maxSize = "1024x1024"
let sizes = [40, 80, 160, 320, 640]

let dir = "./public/assets/images/people"

let files = fs.readdirSync(dir)

fs.ensureDir(path.join(dir, "opt"))

// files object contains all files names
// log them on console
files
  .filter(file => {
    return file.includes("webp") && file.includes(maxSize)
  })
  .forEach(file => {
    const f = `${dir}/${file}`

    const name = path.parse(file).name

    sizes.forEach(size => {
      const out = `${dir}/opt/${name.replace(maxSize, `${size}x${size}`)}.webp`

      if (!fs.existsSync(out)) {
        console.log(out)
        sharp(f).resize({ width: size }).toFile(out)
      }
    })

    // placeholder
    const out = `${dir}/opt/${name.replace(maxSize, `placeholder`)}.webp`

    if (!fs.existsSync(out)) {
      console.log(out)
      sharp(f).resize({ width: 32 }).blur(4).toFile(out)
    }
  })

maxSize = "2048x1024"
sizes = [200, 400, 800, 800, 1600]

dir = "./public/assets/images/posts"

files = fs.readdirSync(dir)

fs.ensureDir(path.join(dir, "opt"))

// files object contains all files names
// log them on console
files
  .filter(file => {
    return file.includes("webp") && file.includes(maxSize)
  })
  .forEach(file => {
    const f = `${dir}/${file}`

    const name = path.parse(file).name

    sizes.forEach(size => {
      const out = `${dir}/opt/${name.replace(
        maxSize,
        `${size}x${Math.floor(size / 2)}`
      )}.webp`

      if (!fs.existsSync(out)) {
        console.log(out)
        sharp(f)
          .resize((width = size))
          .toFile(out)
      }
    })

    // placeholder
    const out = `${dir}/opt/${name.replace(maxSize, `placeholder`)}.webp`

    if (!fs.existsSync(out)) {
      console.log(out)
      sharp(f).resize({ width: 32 }).blur(4).toFile(out)
    }
  })
