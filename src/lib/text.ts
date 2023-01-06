/**
 * Capitalizes the first letter of each word in
 * a string. Assumes single dash is a space and double dash
 * is a hyphenated word
 *
 * @param text text to capitalize.
 * @returns the string with each word capitalized.
 */
export function toCapitalCase(text: string): string {
  return text
    .replaceAll("--", "* ")
    .replaceAll("-", " ")
    .replaceAll(/ +/g, " ")
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ")
    .replaceAll("* ", "-")
}

/**
 * Truncates a string to a max number of chars adding
 * an ellipsis at the end if the string is truncated.
 *
 * @param name  a name to shorten.
 * @param l     max number of chars
 * @returns     a shortened name with an ellipsis at the
 *              end to denote when string was truncated.
 */
export function getShortName(name: string, l: number = 20) {
  if (name.length < l) {
    return name
  }

  return name.substring(0, l) + "..."
}
