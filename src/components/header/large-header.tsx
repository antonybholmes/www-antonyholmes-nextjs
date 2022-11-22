import ContentDiv from "../content-div"
import BaseLink from "../link/base-link"
import HeaderLinks from "./header-links"

import IChildrenProps from "../../interfaces/children-props"
import HCenterCol from "../h-center-col"
import VCenterRow from "../v-center-row"
import HCenterRow from "../h-center-row"
import LogoIcon from "../../icons/logo"

interface IProps extends IChildrenProps {
  title: string
  tab?: string
}

export default function LargeHeader({ title, tab, children }: IProps) {
  return (
    <nav className="hidden lg:block">
      <ContentDiv>
        <></>

        <div className="flex h-16 flex-row  items-center gap-x-8 xl:gap-x-16">
          <div className="grow-0">
            <BaseLink href="/" ariaLabel="Goto Homepage">
              <LogoIcon />
            </BaseLink>
          </div>
          <div>
            <HeaderLinks title={title} tab={tab} />
          </div>
          <div className="grow">{children && children}</div>
        </div>
        {/* <span className="h-6 border-l-2 border-gray-900" /> */}

        {/* {children && <span className="h-6 border-l-2 border-gray-900" />} */}

        <></>
      </ContentDiv>
    </nav>
  )
}
