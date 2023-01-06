import { capitalize } from "lodash"

export const getUrlFriendlyTag = (tag: string) => {
  return tag
    .trim()
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("-", "--")
    .replaceAll(" ", "-")
}

export const getFormattedTag = (tag: string) => {
  return tag
    .trim()
    .replaceAll("-", " ")
    .replaceAll(" and ", " & ")
    .split(" ")
    .map(tag => capitalize(tag))
    .join(" ")
}
