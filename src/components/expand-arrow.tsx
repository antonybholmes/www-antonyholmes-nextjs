import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import cn from '../lib/class-names'

const CLASSES = cn(`flex 
  flex-row 
  w-5 
  h-5 
  items-center 
  justify-center`)

interface IProps {
  expanded: boolean
  hover?: boolean
}

const ExpandArrow = ({ expanded, hover = false }: IProps) => {
  const [_hover, _setHover] = useState(false)
  const arrowEl = useRef(null)

  const animate = () => {
    gsap.killTweensOf(arrowEl.current)

    gsap.timeline().to(arrowEl.current, {
      duration: 0.3,
      rotation: `${expanded ? '90_cw' : '0_ccw'}`,
      transformOrigin: '50% 50%',
      ease: 'power3.out',
    })
  }

  useEffect(() => {
    animate()
  }, [])

  useEffect(() => {
    animate()
  }, [expanded])

  const onMouseEnter = (e: any) => {
    _setHover(true)
  }

  const onMouseLeave = (e: any) => {
    _setHover(false)
  }

  return (
    <div ref={arrowEl} className={CLASSES}>
      <FontAwesomeIcon
        icon={faChevronRight} //{isExpanded ? "chevron-up" : "chevron-down"}
        className={cn(`animate-button`, [hover || _hover, '', 'text-gray-400'])}
      />
    </div>
  )
}

export default ExpandArrow
