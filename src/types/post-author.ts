interface IPostAuthor {
  slug: string
  fields: {
    id: string
    name: string
    title: string
    picture: string
    content: string
  }
}

export default IPostAuthor
