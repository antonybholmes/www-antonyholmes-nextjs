import {
  BROKERAGE_SLUG,
  CATEGORY_SLUG,
  CREDIT_CARD_SLUG,
  PEOPLE_SLUG,
  PORTFOLIO_SLUG,
  POST_SLUG,
  REVIEW_SLUG,
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

export const getCategoryBaseUrl = (category: string) => {
  return `${CATEGORY_SLUG}/${getUrlFriendlyTag(category)}`
}

export const getSectionBaseUrl = (category: string, section: string) => {
  return `${CATEGORY_SLUG}/${getUrlFriendlyTag(
    category
  )}/section/${getUrlFriendlyTag(section)}`
}

export const getTagBaseUrl = (tag: string) => {
  return `${TAG_SLUG}/${getUrlFriendlyTag(tag)}`
}

export const getTagUrl = (tag: string) => {
  return getTagBaseUrl(tag)
}

export const getPostBaseUrl = (slug: string): string => {
  return `${POST_SLUG}/${slug}`
}

export const getPostUrl = (slug: string): string => {
  return `${SITE_URL}/${POST_SLUG}/${slug}`
}
