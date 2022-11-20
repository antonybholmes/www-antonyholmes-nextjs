import { range } from "lodash"
import { RECORDS_PER_PAGE } from "../constants"
import IFieldMap from "../interfaces/field-map"

export function paginate(
  data: any[],
  slug: string = "",
  globalProps: IFieldMap = {}
) {
  const paths = []

  const pages = getPageCount(data)

  if (slug !== "") {
    paths.push({
      params: {
        slug,
      },
      props: {
        currentPage: 1,
        pages,
        data: getPagePosts(data, 0),
        ...globalProps,
      },
    })
  }

  range(0, pages).forEach((page: number) => {
    const currentPage = page + 1

    paths.push({
      params: {
        slug: `${slug !== "" ? `${slug}/` : ""}page/${currentPage.toString()}`,
      },
      props: {
        currentPage,
        pages,
        data: getPagePosts(data, page),
        ...globalProps,
      },
    })
  })

  return paths
}

export function getPageCount(posts: any[]): number {
  return Math.floor((posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE)
}

export function getPagePosts(posts: any[], page: number = 0): any[] {
  const start = page * RECORDS_PER_PAGE
  return posts.slice(start, start + RECORDS_PER_PAGE)
}
