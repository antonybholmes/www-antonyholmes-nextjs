import { capitalize } from "lodash"

export const getUrlFriendlyTag = (tag: string): string => {
  return tag
    .trim()
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("-", "--")
    .replaceAll(" ", "-")
}

export const getUrlFriendlyTags = (tags: string[]): string[] => {
  return tags.map(tag => getUrlFriendlyTag(tag))
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
