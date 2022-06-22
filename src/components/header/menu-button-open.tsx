import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from '../../lib/class-names'

export const CLS = `px-4 py-3 focus:outline-none animate-button border-3 border-solid border-transparent`

export interface IProps {
  headerMode?: string
  onClick: any
}

const MenuOpenButton = ({ headerMode = 'light', onClick }: IProps) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const handleMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(CLS, [
        headerMode === 'dark',
        'text-gray-400 hover:text-gray-50 focus:border-gray-50',
        'hover:text-blue-400 focus:border-blue-200',
      ])}
      aria-label="Open Menu"
    >
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
  )
}

export default MenuOpenButton
