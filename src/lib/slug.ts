export const getCanonicalPostSlug = (path: string): string => {
  return path
    .replace(/\.md$/, "")
    .replaceAll("\\", "/")
    .replace(/^.+(published|drafts)\//, "")
    .replace(/^.+\//, "")
}

export const getCanonicalAuthorSlug = (path: string): string => {
  return path
    .replace(/\.md$/, "")
    .replaceAll("\\", "/")
    .replace(/^.+authors\//, "")
}

export const getCanonicalReviewSlug = (path: string): string => {
  return path
    .replace(/\.md$/, "")
    .replaceAll("\\", "/")
    .replace(/^.+reviews\//, "")
}

export const getCanonicalSlug = (path: string): string => {
  return path.replace(/\.md$/, "").replaceAll("\\", "/").replace(/^.+\//, "")
}
