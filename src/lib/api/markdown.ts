import fs from 'fs'
import matter from 'gray-matter'
import IFieldMap from '../../types/field-map'
import { getTags } from '../tags'

export const getFields = (path: string, fields: string[] = []): IFieldMap => {
  const fileContents = fs.readFileSync(path, 'utf8')
  const { data, content, excerpt } = matter(fileContents, {
    excerpt: true,
    excerpt_separator: '<!-- end -->',
  })

  const items: IFieldMap = {}

  items['content'] = content
  items['excerpt'] = excerpt

  for (const [key, value] of Object.entries(data)) {
    switch (key) {
      case 'tags':
        items[key] = getTags(value)
        break
      default:
        items[key] = value
        break
    }
  }

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
