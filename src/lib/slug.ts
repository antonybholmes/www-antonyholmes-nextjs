import ISlug from '../types/slug'

export const getCanonicalPostSlug = (path: string): string => {
  return path
    .replace(/\.md$/, '')
    .replaceAll('\\', '/')
    .replace(/^.+(published|drafts)\//, '')
    .replace(/^.+\//, '')
}

export const getPostSlug = (path: string): ISlug => {
  return getCanonicalPostSlug(path).split('/')
}

export const getCanonicalAuthorSlug = (path: string): string => {
  return path
    .replace(/\.md$/, '')
    .replaceAll('\\', '/')
    .replace(/^.+authors\//, '')
}

export const getAuthorSlug = (path: string): ISlug => {
  return getCanonicalAuthorSlug(path).split('/')
}

export const getSlugAsPath = (slug: ISlug): string => {
  return slug.join('/')
}
