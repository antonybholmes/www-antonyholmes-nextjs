import cn from "../../lib/class-names"
import { IHtmlProps } from "../html"
import MarkdownBody from "../markdown-body"

export default function PostBody({ html, className }: IHtmlProps) {
  return <MarkdownBody html={html} className={cn("post", className)} />
}
