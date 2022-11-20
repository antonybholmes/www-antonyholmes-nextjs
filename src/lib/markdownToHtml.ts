import { unified } from "unified"
import remarkParse from "remark-parse"
//import remarkPrism from 'remark-prism'
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeSlug from "rehype-slug"
//import rehypeSanitize from 'rehype-sanitize'

export default async function markdownToHtml(markdown: string) {
  //const result = await remark().use(html).use(prism).process(markdown)
  const result = await unified()
    .use(remarkParse)
    //.use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)
  return result.toString()
}
