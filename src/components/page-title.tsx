import IClassProps from "../interfaces/class-props"
import IPageTitleProps from "../interfaces/page-title-props"
import cn from "../lib/class-names"

interface IProps extends IPageTitleProps, IClassProps {}

export default function PageTitle({
  title,
  supertitle,
  subtitle,
  className,
}: IProps) {
  return (
    <header className={cn("flex flex-col gap-y-2", className)}>
      {supertitle && <h3 className="text-base font-normal">{supertitle}</h3>}

      <h1 className="text-3xl capitalize lg:text-4xl">{title}</h1>

      {subtitle && <h2 className="text-xl">{subtitle}</h2>}
    </header>
  )
}
