import IBasePost from './base-post'
import IPostAuthor from './post-author'

interface IPreviewPost extends IBasePost {
  excerpt: string
  authors: IPostAuthor[]
}

export default IPreviewPost
