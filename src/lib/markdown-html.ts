import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkPrism from "remark-prism"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeSlug from "rehype-slug"

export default async function markdownHtml(markdown: string) {
  //const result = await remark().use(html).use(prism).process(markdown)
  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: [
        "autolinker",
        "command-line",
        "data-uri-highlight",
        "diff-highlight",
        "inline-color",
        "keep-markup",
        "line-numbers",
        "show-invisibles",
        "treeview",
      ],
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)
  return result.toString()
}
