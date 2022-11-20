export function getImageMap(data: any) {
  const imageMap: any = {}

  data.images.nodes.forEach((file: { ext: string; name: string }) => {
    if (file.ext === ".webp") {
      imageMap[file.name] = file
    }
  })

  if (data.genericPersonImage) {
    imageMap["generic"] = data.genericPersonImage
  }

  return imageMap
}

export default getImageMap
