import cn from '../lib/class-names'
import { getAuthorUrl } from '../lib/urls'
import IPostAuthor from '../types/post-author'
import AvatarImage from './avatar-image'
import BaseCol from './base-col'
import BaseLink from './link/base-link'
import UnderlineLink from './link/underline-link'
import VCenterRow from './v-center-row'

interface IProps {
  author: IPostAuthor
  showTitle?: boolean
  isSmall?: boolean
  className?: string
}

const Avatar = ({
  author,
  showTitle = false,
  isSmall = false,
  className,
}: IProps) => {
  const href = getAuthorUrl(author.fields.name)

  return (
    <VCenterRow className={className}>
      <BaseLink
        href={href}
        aria={`Click to read more information about ${author.fields.name}`}
        className={cn('block', [isSmall, 'w-10 h-10', 'w-16 h-16'])}
      >
        <AvatarImage author={author} />
      </BaseLink>
      <BaseCol className="ml-3">
        <UnderlineLink
          href={href}
          aria={`Click to read more information about ${author.fields.name}`}
          className={cn([isSmall, 'text-sm'], [showTitle, 'font-semibold'])}
        >
          {author.fields.name}
        </UnderlineLink>

        {showTitle && (
          <p className="text-gray-500 text-sm font-light">
            {author.fields.title.split(',')[0].trim()}
          </p>
        )}
      </BaseCol>
    </VCenterRow>
  )
}

export default Avatar
