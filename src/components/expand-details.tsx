import { useEffect, useRef, useState } from 'react'
import useWindowResize from '../hooks/use-window-resize'
import cn from '../lib/class-names'
import IChildrenProps from '../interfaces/children-props'

interface IProps extends IChildrenProps {
  expanded: boolean
}

const ExpandDetails = ({ expanded = true, className, children }: IProps) => {
  const [height, setHeight] = useState(expanded ? 'auto' : '0px')
  const ref = useRef(null)

  useEffect(() => {
    // @ts-ignore
    setHeight(`${ref.current.scrollHeight}px`)
  }, [])

  useWindowResize((e: { width: number; height: number }) => {
    // @ts-ignore
    setHeight(`${ref.current.scrollHeight}px`)
  })

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden transition-all duration-300', className)}
      style={{ height: expanded ? height : '0px' }}
    >
      {/* <div className={expanded ? 'block': 'hidden'}> */}
      {children}
      {/* </div> */}
    </div>
  )
}

export default ExpandDetails
