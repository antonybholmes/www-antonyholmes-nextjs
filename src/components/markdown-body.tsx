import cn from "../lib/class-names"
import HTML, { IHtmlProps } from "./html"

interface IMarkdownProps extends IHtmlProps {
  color?: string
}

export default function MarkdownBody({
  html,
  color = "markdown-default",
  className,
}: IMarkdownProps) {
  return <HTML html={html} className={cn("markdown", color, className)} />
}
