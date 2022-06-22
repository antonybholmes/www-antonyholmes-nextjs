interface IPage {
  slug: string
  fields: {
    title: string
    subtitle: string
    hero: string
    excerpt: string
    tags: string
    content: string
  }
  html: string
}

export default IPage
