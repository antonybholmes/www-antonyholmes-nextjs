import IClassProps from "../interfaces/class-props"

export interface IHtmlProps extends IClassProps {
  html: string
}

export default function HTML({ html, className }: IHtmlProps) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  )
}
