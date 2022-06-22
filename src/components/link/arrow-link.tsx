import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BaseLink from './base-link'
import VCenterRow from '../v-center-row'
import ILinkProps from '../../types/link-props'

const ArrowLink = ({ href, aria, className, children }: ILinkProps) => (
  <VCenterRow className={className}>
    <BaseLink href={href} aria={aria} underline={true}>
      {children}
    </BaseLink>
    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
  </VCenterRow>
)

export default ArrowLink
