import { ReactElement } from 'react'
import cn from '../lib/class-names'
import Expand from './expand'
import UnderlineLink from './link/underline-link'

interface IProps {
  title: string
  href?: string
  isExpanded?: boolean
  className?: string
  children: ReactElement
}

const DropShadowExpand = ({
  title,
  href,
  isExpanded = true,
  className,
  children,
}: IProps) => (
  <Expand
    isExpanded={isExpanded}
    className={cn('shadow-card overflow-hidden rounded-lg p-6 mb-8', className)}
  >
    <h3 className="text-xl">
      {href ? (
        <UnderlineLink href={href} aria={`Expand ${title} content`}>
          {title}
        </UnderlineLink>
      ) : (
        <>{title}</>
      )}
    </h3>
    {children}
  </Expand>
)

export default DropShadowExpand
