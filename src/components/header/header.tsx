import { useState } from 'react'
import HeaderLinks from './header-links'
import AltView from '../alt-view'
import ArticleContainer from '../article-container'
import VCenterRow from '../v-center-row'
import BaseLink from '../link/base-link'
import MenuOverlay from './menu-overlay'
import MenuOpenButton from './menu-button-open'
import Search from '../search/search'
import cn from '../../lib/class-names'
import Logo from '../logo'
import useWindowResize from '../../hooks/use-window-resize'
import LogoDark from '../logo-dark'

interface IProps {
  title: string
  tab?: string
  headerMode?: string
  className?: string
}

const Header = ({
  title,
  tab = '',
  headerMode = 'light',
  className,
}: IProps) => {
  const [expanded, setExpanded] = useState(false)

  useWindowResize((e: any) => {
    setExpanded(false)
  })

  const _handleClick = () => {
    _toggleHeight()
  }

  const _toggleHeight = () => {
    setExpanded(!expanded)
  }

  return (
    <header
      className={cn(
        'w-full border-b py-0 lg:py-2',
        [
          headerMode === 'dark',
          'bg-gray-800 border-gray-600',
          'border-gray-200',
        ],
        className
      )}
    >
      <AltView sizes={['lg']}>
        <VCenterRow className="justify-between p-2 pl-6">
          <BaseLink href="/" aria="Goto Homepage">
            {headerMode === 'dark' ? <LogoDark /> : <Logo />}
          </BaseLink>

          <MenuOpenButton headerMode={headerMode} onClick={_handleClick} />
        </VCenterRow>

        {/* <div className="hidden lg:block"> */}
        <ArticleContainer>
          <nav className="grid py-4 grid-cols-10 items-center">
            <div className="col-span-3">
              <BaseLink href="/" aria="Goto Homepage">
                {headerMode === 'dark' ? <LogoDark /> : <Logo />}
              </BaseLink>
            </div>
            <HeaderLinks title={title} tab={tab} headerMode={headerMode} />

            <div className="col-span-3" />
          </nav>
        </ArticleContainer>
        {/* </div> */}
      </AltView>
      <MenuOverlay
        title={title}
        page={tab}
        expanded={expanded}
        onClick={_handleClick}
      />

      {/* </ExpandDetails> */}

      {/* <AnimateHeight
        id="mobile-menu"
        duration={500}
        height={menuHeight} // see props documentation below
      >
        <HeaderLinks title={title} page={page} rowMode={false} />
      </AnimateHeight> */}

      {/* <div className={`p-4 ${isVisible ? "block" : "hidden "}`}>
        <HeaderLinks title={props.title} rowMode={false} />
      </div> */}
    </header>
  )
}

export default Header
