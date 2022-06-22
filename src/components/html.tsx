interface IProps {
  content: string
  className?: string
}

const HTML = ({ content, className }: IProps) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export default HTML
