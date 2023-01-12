import cn from "../lib/class-names"
import HTML, { IHtmlProps } from "./html"

export default function MarkdownBody({ html, className }: IHtmlProps) {
  return <HTML html={html} className={cn("markdown", className)} />
}
