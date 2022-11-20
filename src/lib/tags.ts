import { capitalize } from "lodash"

export function getTags(tags: string) {
  return tags
    .split(",")
    .sort()
    .map(tag => tag.trim())
}

export function getUrlFriendlyTag(tag: string) {
  return tag.trim().toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")
}

export function getFormattedTag(tag: string) {
  return tag
    .trim()
    .replaceAll("-", " ")
    .replaceAll(" and ", " & ")
    .split(" ")
    .map(tag => capitalize(tag))
    .join(" ")
}
