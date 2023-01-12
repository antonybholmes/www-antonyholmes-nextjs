import cn from "../lib/class-names"
import IClassProps from "../interfaces/class-props"
import IPageTitleProps from "../interfaces/page-title-props"
import Title from "./title"

interface IProps extends IPageTitleProps, IClassProps {}

export default function PageTitle({
  title,
  superTitle,
  subTitle,
  className,
}: IProps) {
  return (
    <header className={cn("flex flex-col gap-y-1", className)}>
      {superTitle && <h3 className="text-lg font-normal">{superTitle}</h3>}

      <Title>{title}</Title>

      {subTitle && <h2 className="text-xl font-light">{subTitle}</h2>}
    </header>
  )
}
