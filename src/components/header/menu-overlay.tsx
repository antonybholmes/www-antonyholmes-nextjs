import VCenterRow from '../v-center-row'
import cn from '../../lib/class-names'
import MenuCloseButton from './menu-button-close'
import { animated, useSpring } from 'react-spring'
import MenuLinks from './menu-links'

interface IProps {
  title: string
  page?: string
  expanded: boolean
  onClick: any
}

const MenuOverlay = ({ title, page, expanded, onClick }: IProps) => {
  const menuAnimation = useSpring({
    transform: expanded ? `translateY(0)` : `translateY(-100%)`,
    opacity: expanded ? 1 : 0,
  })

  return (
    <animated.div
      className={cn('fixed left-0 top-0 w-full h-screen z-50 bg-black-80')}
      style={menuAnimation}
      onClick={onClick}
    >
      <VCenterRow className="justify-end p-2 bg-white border-b border-gray-200">
        <MenuCloseButton onClick={onClick} />
      </VCenterRow>
      <div className="p-4 border-b bg-white">
        <MenuLinks title={title} tab={page} onClick={onClick} />
      </div>
    </animated.div>
  )
}

export default MenuOverlay
