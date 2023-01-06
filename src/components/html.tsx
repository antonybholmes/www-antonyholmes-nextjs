import IClassProps from "../interfaces/class-props"

export interface IHtmlProps extends IClassProps {
  html: string
}

const HTML = ({ html, className }: IHtmlProps) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default HTML
