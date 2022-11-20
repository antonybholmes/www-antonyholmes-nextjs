export function toUpperCase(text: string): string {
  return text
    .replaceAll("-", " ")
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ")
}

export default toUpperCase
