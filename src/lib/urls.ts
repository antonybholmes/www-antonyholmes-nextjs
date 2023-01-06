import {
  BROKERAGE_SLUG,
  CREDIT_CARD_SLUG,
  PAGE_1_SLUG,
  PEOPLE_SLUG,
  PORTFOLIO_SLUG,
  POST_SLUG,
  REVIEW_SLUG,
  SECTION_SLUG,
  SITE_URL,
  TAG_SLUG,
} from "../constants"
import { getUrlFriendlyTag } from "./tags"

export const getAuthorUrl = (name: string) => {
  return `${PEOPLE_SLUG}/${getUrlFriendlyTag(name)}`
}

export const getReviewBaseUrl = (tag: string) => {
  return `${REVIEW_SLUG}/${getUrlFriendlyTag(tag)}`
}

export const getCreditCardTagUrl = (tag: string) => {
  return `${CREDIT_CARD_SLUG}/tag/${getUrlFriendlyTag(tag)}`
}

export const getBrokerageTagUrl = (tag: string) => {
  return `${BROKERAGE_SLUG}/tag/${getUrlFriendlyTag(tag)}`
}

export const getPortfolioTagUrl = (tag: string) => {
  return `${PORTFOLIO_SLUG}/tag/${getUrlFriendlyTag(tag)}`
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
  return getTagBaseUrl(tag)
}

export const getPostRelativeUrl = (slug: string): string => {
  return `${POST_SLUG}/${slug}`
}

export const getPostUrl = (slug: string): string => {
  return `${SITE_URL}/${POST_SLUG}/${slug}`
}
