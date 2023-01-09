import IBasePost from "../../interfaces/base-post"
import IFieldMap from "../../interfaces/field-map"
import { getUrlFriendlyTag } from "../tags"

export default class TagMap {
  _tagMap: IFieldMap = {}
  _friendlyTags = new Set<string>()
  _tags = new Set<string>()

  constructor(posts: IBasePost[], max: number = -1) {
    posts.forEach(post => {
      post.frontmatter.tags.forEach((tag: string) => {
        this._tags.add(tag)
        // Add the tag as is
        if (!(tag in this._tagMap)) {
          this._tagMap[tag] = []
        }

        if (max === -1 || this._tagMap[tag].length < max) {
          this._tagMap[tag].push(post)
        }

        // add a url friendly version to make it easier
        // to find tags
        const t = getUrlFriendlyTag(tag)

        this._friendlyTags.add(tag)

        if (!(t in this._tagMap)) {
          this._tagMap[t] = []
        }

        if (max === -1 || this._tagMap[t].length < max) {
          this._tagMap[t].push(post)
        }
      })
    })
  }

  getFriendlyTags(): string[] {
    return Array.from(this._friendlyTags).sort()
  }

  getTags(): string[] {
    return Array.from(this._tags).sort()
  }

  getPosts(tag: string): IBasePost[] {
    return this._tagMap[tag]
  }
}
