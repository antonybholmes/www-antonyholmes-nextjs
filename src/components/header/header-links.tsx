import cn from '../../lib/class-names'
import { CLS_TEXT_GRAY_HOVER } from '../../constants'
import HEADER_LINKS from '../../../_content/menus/header.json'
import ILink from '../../types/link'
import HeaderLink from './header-link'
import HeaderLinkDark from './header-link-dark'

interface IProps {
  title: string
  tab?: string
  headerMode?: string
  onClick?: any
}

const HeaderLinks = ({
  title,
  tab = '',
  headerMode = 'light',
  onClick,
}: IProps) => (
  <ul
    className="flex flex-row items-center justify-center col-span-4"
    style={{ fontFamily: 'Poppins' }}
  >
    {HEADER_LINKS.map((link: ILink, index: number) => {
      const selected = link.name === title || link.name === tab

      return (
        <li key={index} className={cn('inline', [index > 0, 'ml-6'])}>
          {headerMode === 'dark' ? (
            <HeaderLinkDark link={link} selected={selected} onClick={onClick} />
          ) : (
            <HeaderLink link={link} selected={selected} onClick={onClick} />
          )}
        </li>
      )
    })}
  </ul>
)

export default HeaderLinks
