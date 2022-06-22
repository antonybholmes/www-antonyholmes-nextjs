import cn from '../../lib/class-names'
import { CLS_TEXT_GRAY_HOVER } from '../../constants'
import HEADER_LINKS from '../../../_content/menus/header.json'
import ILink from '../../types/link'
import BaseLink from '../link/base-link'

interface IProps {
  title: string
  tab?: string
  onClick?: any
}

const MenuLinks = ({ title, tab = '', onClick }: IProps) => (
  <ul>
    {HEADER_LINKS.map((link: ILink, index: number) => {
      const selected = title == link.name || tab == link.name

      return (
        <li key={index}>
          <BaseLink
            href={link.url}
            aria={`Visit ${link.name}`}
            className={cn(`block rounded px-6 py-4 `, [
              selected,
              ' bg-gray-200',
              cn(CLS_TEXT_GRAY_HOVER, 'hover:bg-gray-100 animate-button'),
            ])}
            onClick={onClick}
          >
            {link.name}
          </BaseLink>
        </li>
      )
    })}
  </ul>
)

export default MenuLinks
