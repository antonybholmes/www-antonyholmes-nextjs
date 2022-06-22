import { AUTHOR_SLUG, PAGE_1_SLUG, SECTION_SLUG, TAG_SLUG } from '../constants'
import { getUrlFriendlyTag } from './tags'

export const getPortfolioTagUrl = (tag: string) => {
  return `/portfolio${TAG_SLUG}/${tag.toLowerCase().replace(' ', '-')}`
}

export const getAuthorUrl = (name: string) => {
  return `${AUTHOR_SLUG}/${name.toLowerCase().replace(' ', '-')}`
}

export const getSectionBaseUrl = (section: string) => {
  return `${SECTION_SLUG}/${getUrlFriendlyTag(section)}`
}

export const getSectionUrl = (section: string) => {
  return `${getSectionBaseUrl(section)}${PAGE_1_SLUG}`
}

export const getTagBaseUrl = (tag: string) => {
  return `${TAG_SLUG}/${getUrlFriendlyTag(tag)}`
}

export const getTagUrl = (tag: string) => {
  return `${getTagBaseUrl(tag)}${PAGE_1_SLUG}`
}
