import cn from '../../lib/class-names'
import IBaseLinkProps from '../../types/base-link-props'
import { BLUE_BUTTON_CLASSES, BUTTON_CLASSES } from './blue-button-link'

interface IProps extends IBaseLinkProps {
  onClick: any
}

const BlueButton = ({ aria, onClick, className, children }: IProps) => (
  <button
    aria-label={aria}
    onClick={onClick}
    // className="border-b-4 border-blue-600 bg-default-blue text-white hover:bg-blue-600 trans-ani px-8 py-4 rounded-md uppercase"
    className={cn(BUTTON_CLASSES, BLUE_BUTTON_CLASSES, className)}
  >
    {children}
  </button>
)

export default BlueButton

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
