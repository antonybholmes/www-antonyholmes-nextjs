export function getElipsis(text: string, n: number = 24) {
  if (text.length > n) {
    return `${text.substring(0, n)}...`
  } else {
    return text
  }
}

export default getElipsis
