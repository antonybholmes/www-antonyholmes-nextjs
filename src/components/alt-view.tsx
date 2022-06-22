import { ReactElement } from 'react'
import cn from '../lib/class-names'

const hiddenSizes = (size: string) => {
  switch (size) {
    case 'lg':
      return 'lg:hidden'
    case 'xl':
      return 'xl:hidden'
    case '2xl':
      return '2xl:hidden'
    default:
      return 'sm:hidden'
  }
}

const blockSizes = (size: string) => {
  switch (size) {
    case 'lg':
      return 'lg:block'
    case 'xl':
      return 'xl:block'
    case '2xl':
      return '2xl:block'
    default:
      return 'sm:block'
  }
}

interface IProps {
  sizes?: string[]
  className?: string
  style?: any
  children: ReactElement[]
}

const AltView = ({ sizes = ['sm'], className, style, children }: IProps) => {
  const classes: string[] = []

  classes.push(cn(`block`, hiddenSizes(sizes[0])))

  for (let i = 1; i < children.length; ++i) {
    classes.push(
      cn('hidden', blockSizes(sizes[i - 1]), [
        i < children.length - 1,
        hiddenSizes(sizes[i]),
      ])
    )
  }

  return (
    <div className={className} style={style}>
      {children.map((child, index) => {
        return (
          <div key={index} className={classes[index]}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default AltView
