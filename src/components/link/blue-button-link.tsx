import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'

export const BUTTON_CLASSES =
  'flex flex-row items-center justify-center text-center px-8 py-3 font-semibold rounded-lg animate-button'

export const BLUE_BUTTON_CLASSES = 'text-white bg-blue-500 hover:bg-blue-600'

const BlueButtonLink = ({ href, aria, className, children }: ILinkProps) => (
  <BaseLink
    href={href}
    aria={aria}
    className={cn(BUTTON_CLASSES, BLUE_BUTTON_CLASSES, className)}
  >
    {children}
  </BaseLink>
)

export default BlueButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
