import { capitalize } from 'lodash'

export const getTags = (tags: string) => {
  return tags
    .split(',')
    .sort()
    .map(tag => tag.trim())
}

export const getUrlFriendlyTag = (tag: string) => {
  return tag.trim().toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')
}

export const getFormattedTag = (tag: string) => {
  return tag
    .trim()
    .replaceAll('-', ' ')
    .replaceAll(' and ', ' & ')
    .split(' ')
    .map(tag => capitalize(tag))
    .join(' ')
}
