import { unified } from 'unified'
import remarkParse from 'remark-parse'
//import remarkPrism from 'remark-prism'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export const markdownHtml = async markdown => {
  //const result = await remark().use(html).use(prism).process(markdown)
  const result = await unified()
    .use(remarkParse)
    //.use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)
  return result.toString()
}

export default markdownHtml
