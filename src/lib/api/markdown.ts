import fs from "fs"
import matter from "gray-matter"
import IAuthorFields from "../../interfaces/author-fields"
import IFieldMap from "../../interfaces/field-map"
import IPageFields from "../../interfaces/page-fields"
import IPostFields from "../../interfaces/post-fields"

export const getFields = (path: string, items: IFieldMap) => {
  const fileContents = fs.readFileSync(path, "utf8")
  const { data, content, excerpt } = matter(fileContents, {
    excerpt: true,
    excerpt_separator: "<!-- end -->",
  })

  items["rawContent"] = content
  items["rawExcerpt"] = excerpt

  Object.assign(items, data)

  //console.log(items)

  // for (const [key, value] of Object.entries(data)) {
  //   switch (key) {
  //     case 'tags':
  //       items[key] = getTags(value)
  //       break
  //     // case 'authors':
  //     //   items[key] = getBaseTags(value)
  //     //   break
  //     default:
  //       items[key] = value
  //       break
  //   }
  // }

  // Ensure only the minimal needed data is exposed
  // fields.forEach(field => {
  //   //if (field === 'slug') {
  //   //  items[field] = realPath //realSlug
  //   //}

  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (field === 'excerpt') {
  //     items[field] = excerpt
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  return items
}

export const getPostFields = (path: string): IPostFields => {
  const items: IPostFields = {
    id: "",
    index: -1,
    title: "",
    description: "",
    rawContent: "",
    rawExcerpt: "",
    hero: "generic1",
    heroCaption: "",
    authors: [],
    categories: [],
    related: [],
    status: "draft",
    tags: [],
  }

  getFields(path, items)

  return items
}

export const getAuthorFields = (path: string): IAuthorFields => {
  const items: IAuthorFields = {
    id: "",
    name: "",
    title: "",
    email: "",
    pubmed: "",
    rawContent: "",
    rawExcerpt: "",
  }

  getFields(path, items)

  return items
}

export const getPageFields = (path: string): IPageFields => {
  const items: IPageFields = {
    id: "",
    title: "",
    authors: [],
    rawContent: "",
    rawExcerpt: "",
  }

  getFields(path, items)

  return items
}
