import { ReactNode, useState } from 'react'
import ExpandArrow from './expand-arrow'
import VCenterRow from './v-center-row'

interface IProps {
  expanded?: boolean
  onClick?: any
  children?: ReactNode
}

const ExpandButton = ({ expanded = false, onClick, children }: IProps) => {
  const [hover, setHover] = useState(false)

  const _handleMouseEnter = () => {
    setHover(true)
  }

  const _handleMouseLeave = () => {
    setHover(false)
  }

  const _handleInput = (e: any) => {
    //_setValue(e.target.value)

    if (e.key === 'Enter' && onClick !== null) {
      onClick(e.target.value)
    }
  }

  return (
    <VCenterRow
      tabIndex={0}
      onClick={onClick}
      onKeyDown={_handleInput}
      className="cursor-pointer"
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
    >
      <ExpandArrow expanded={expanded} hover={hover} />
      <div className="ml-2 w-full">{children}</div>
    </VCenterRow>
  )
}

export default ExpandButton
