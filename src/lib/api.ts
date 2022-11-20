import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import IPerson from "../interfaces/person"
import IFieldMap from "../interfaces/field-map"
import getTitleMap from "./title-map"
import INewsItem from "../interfaces/news-item"
import IPage from "../interfaces/page"
import IPersonMap from "../interfaces/person-map"

export const CONTENT_DIR = join(process.cwd(), "_content")
export const POSTS_DIR = join(CONTENT_DIR, "posts")
export const PEOPLE_DIR = join(CONTENT_DIR, "people")
export const NEWS_DIR = join(CONTENT_DIR, "news")
export const JOBS_DIR = join(CONTENT_DIR, "jobs")
export const PUBLICATIONS_DIR = join(CONTENT_DIR, "publications")


export const getFields = (path: string, items: IFieldMap) => {
  const fileContents = fs.readFileSync(path, "utf8")
  const { data, content, excerpt } = matter(fileContents, {
    excerpt: true,
    excerpt_separator: "<!-- end -->",
  })

  items["content"] = content
  items["excerpt"] = excerpt
  items["frontmatter"] = data

  //Object.assign(items, data)

  return items
}

export function getPeopleSlugs() {
  return fs.readdirSync(PEOPLE_DIR)
}

export function getPersonBySlug(slug: string): IPerson {
  const items: IPerson = {
    index: 0,
    slug: slug.replace(".md", ""),
    titleMap: undefined,
    html: "",
    content: "",
    excerpt: "",
    frontmatter: {
      pubmed: "",
      personId: "",
      name: "",
      headshot: false,
      headerImage: false,
      postNominalLetters: "",
      titles: [],
      phone: "",
      fax: "",
      email: "",
      room: "",
      researchAreas: [],
      tags: [],
      groups: undefined,
      labs: [],
      caption: "",
      profile: "",
    },
  }

  getFields(join(PEOPLE_DIR, slug), items)

  items.titleMap = getTitleMap(items.frontmatter.titles)

  return items
}

export function getAllPeople(): IPerson[] {
  const slugs = getPeopleSlugs()
  const posts = slugs.map(slug => getPersonBySlug(slug))
  return posts
}

export const getPeopleMap = (people: IPerson[] = null): IPersonMap => {
  if (!people) {
    people = getAllPeople()
  }

  return Object.fromEntries(people.map(x => [x.frontmatter.name, x]))
}

export function getPostSlugs() {
  return fs.readdirSync(POSTS_DIR)
}

export function getPostBySlug(slug: string, dir: string): INewsItem {
  const match = slug.match(/(\d{4})-(\d{2})-(\d{2})/)
  const date = match ? match.slice(1, 4).join("-") : "2022-01-01"

  const items: INewsItem = {
    index: 0,
    slug: slug.replace(".md", ""),
    html: "",
    content: "",
    excerpt: "",
    date: date,
    frontmatter: {
      title: "",
      description: "",
      readTime: "",
      section: "",
      tags: [],
      related: [],
      hero: "",
      heroCaption: "",
      draft: false,
      authors: [],
    },
  }

  getFields(join(dir, slug), items)

  return items
}

export function getAllPosts(): INewsItem[] {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug, POSTS_DIR))
  return posts
}


export function getNewsItemSlugs() {
  return fs.readdirSync(NEWS_DIR)
}

export function getNewsItemBySlug(slug: string, dir: string): INewsItem {
  const match = slug.match(/(\d{4})-(\d{2})-(\d{2})/)
  const date = match ? match.slice(1, 4).join("-") : "2022-01-01"

  const items: INewsItem = {
    index: 0,
    slug: slug.replace(".md", ""),
    html: "",
    content: "",
    excerpt: "",
    date: date,
    frontmatter: {
      title: "",
      description: "",
      readTime: "",
      section: "",
      tags: [],
      related: [],
      hero: "",
      heroCaption: "",
      draft: false,
      authors: [],
    },
  }

  getFields(join(dir, slug), items)

  return items
}

export function getAllNewsItems(): INewsItem[] {
  const slugs = getNewsItemSlugs()
  const posts = slugs.map(slug => getNewsItemBySlug(slug, NEWS_DIR))
  return posts
}

export function getJobSlugs() {
  return fs.readdirSync(JOBS_DIR)
}

export function getAllJobs(): INewsItem[] {
  const slugs = getJobSlugs()
  const posts = slugs.map(slug => getNewsItemBySlug(slug, JOBS_DIR))
  return posts
}

export function getPageBySlug(slug: string): IPage {
  const items: IPage = {
    index: 0,
    slug: slug.replace(".md", ""),
    html: "",
    content: "",
    excerpt: "",
  }

  getFields(join(CONTENT_DIR, slug), items)

  return items
}
