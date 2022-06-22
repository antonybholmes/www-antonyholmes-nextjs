import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CLS, IProps } from './menu-button-open'

const MenuCloseButton = ({ onClick }: IProps) => {
  const [hover, setHover] = useState(false)

  const _handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const _handleMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      className={CLS}
      aria-label="Close Menu"
    >
      <FontAwesomeIcon icon={faTimes} size="lg" />
    </button>
  )
}

export default MenuCloseButton
