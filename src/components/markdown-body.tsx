import cn from "../lib/class-names"
import HTML, { IHtmlProps } from "./html"

const MarkdownBody = ({ html, className }: IHtmlProps) => (
  <HTML html={html} className={cn("markdown", className)} />
)

export default MarkdownBody
