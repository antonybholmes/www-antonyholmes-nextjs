import cn from "../../lib/class-names"
import { IHtmlProps } from "../html"
import MarkdownBody from "../markdown-body"

const PostBody = ({ html, className }: IHtmlProps) => (
  <MarkdownBody html={html} className={cn("post", className)} />
)

export default PostBody
