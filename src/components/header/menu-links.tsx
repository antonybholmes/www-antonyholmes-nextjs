import { MouseEventHandler } from "react"
import ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import { FOOTER_LINKS } from "../../menus"
import MenuLink from "./menu-link"

interface IProps {
  title: string
  headerMode?: string
  tab?: string
  onClick: MouseEventHandler
}

function MenuLinks({ title, headerMode = "light", tab = "", onClick }: IProps) {
  // // const ref = useRef(null)
  // // const tMenuLinkF = useRef(null)
  // // const tMenuLinkR = useRef(null)
  // const isFirstRun = useRef(0)

  // useEffect(() => {
  //   //if (isFirstRun.current < 2) {
  //   // @ts-ignore
  //   gsap.timeline().from(
  //     '.menu-link',
  //     {
  //       duration: 1,
  //       opacity: 0.5,
  //       stagger: 0.1,
  //       ease: 'power3.out',
  //     },
  //     0
  //   )
  //   // .from(
  //   //   '.menu-link',
  //   //   {
  //   //     duration: 0.5,
  //   //     x: '-0.5rem',
  //   //     stagger: 0.05,
  //   //     ease: 'power3.out',
  //   //   },
  //   //   0.1
  //   // )
  //   // }
  //   //++isFirstRun.current
  // }, [])

  // useEffect(() => {
  //   if (isFirstRun.current < 2) {
  //     if (showMenu) {
  //       // @ts-ignore
  //       tMenuLinkR.current.pause()
  //       // @ts-ignore
  //       tMenuLinkF.current.restart()
  //     } else {
  //       // @ts-ignore
  //       tMenuLinkF.current.pause()
  //       // @ts-ignore
  //       tMenuLinkR.current.restart()
  //     }
  //   }

  //   ++isFirstRun.current
  // }, [showMenu])

  return (
    <ul
      className={cn("flex flex-col text-sm font-medium", [
        headerMode === "dark",
        "bg-gray-800",
      ])}
    >
      {FOOTER_LINKS.map((link: ILink, index: number) => {
        const selected = title == link.name || tab == link.name

        return (
          <MenuLink
            link={link}
            selected={selected}
            onClick={onClick}
            key={index}
          />
        )
      })}
    </ul>
  )
}

export default MenuLinks
