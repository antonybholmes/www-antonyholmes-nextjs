const fs = require('fs')
const sharp = require('sharp')
const sizeOf = require('image-size')

let scales = [1600, 1280, 640, 480, 320]

let dir = './public/images/blog'

let files = fs.readdirSync(dir)

// files object contains all files names
// log them on console
files
  .filter(file => {
    return file.includes('webp') && !file.includes('w.webp')
  })
  .forEach(file => {
    const f = `${dir}/${file}`

    var dimensions = sizeOf(f)

    console.log(f, dimensions)

    scales.forEach(w => {
      out = `${dir}/${file.replace('.webp', `-${w}w.webp`)}`
      console.log(out)
      sharp(f)
        .resize((width = w))
        .toFile(out)
    })
    // size = 240
    // out = `${dir}/${size}px/${file}`
    // sharp(f)
    //   .resize((width = size))
    //   .toFile(out)

    // size = 480
    // out = `${dir}/${size}px/${file}`
    // sharp(f)
    //   .resize((width = size))
    //   .toFile(out)

    // size = 640
    // out = `${dir}/${size}px/${file}`
    // sharp(f)
    //   .resize((width = size))
    //   .toFile(out)

    // size = 800
    // out = `${dir}/${size}px/${file}`
    // sharp(f)
    //   .resize((width = size))
    //   .toFile(out)
  })

scales = [800, 640, 480, 320, 240, 160]

dir = './public/images/authors'
files = fs.readdirSync(dir)

// files object contains all files names
// log them on console
files
  .filter(file => {
    return file.includes('webp') && !file.includes('w.webp')
  })
  .forEach(file => {
    const f = `${dir}/${file}`

    var dimensions = sizeOf(f)

    console.log(f, dimensions)

    scales.forEach(w => {
      out = `${dir}/${file.replace('.webp', `-${w}w.webp`)}`
      console.log(out)
      sharp(f)
        .resize((width = w))
        .toFile(out)
    })
  })
// files = fs.readdirSync(dir)

// // files object contains all files names
// // log them on console
// files
//   .filter(file => {
//     return file.includes('webp')
//   })
//   .forEach(file => {
//     const f = `${dir}/${file}`

//     let size
//     let out

//     size = 64
//     out = `${dir}/${size}px/${file}`
//     sharp(f)
//       .resize((width = size))
//       .toFile(out)

//     size = 128
//     out = `${dir}/${size}px/${file}`
//     sharp(f)
//       .resize((width = size))
//       .toFile(out)

//     size = 240
//     out = `${dir}/${size}px/${file}`
//     sharp(f)
//       .resize((width = size))
//       .toFile(out)

//     size = 480
//     out = `${dir}/${size}px/${file}`
//     sharp(f)
//       .resize((width = size))
//       .toFile(out)
//   })
