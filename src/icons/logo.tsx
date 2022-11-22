import { SITE_DOMAIN } from "../constants"
import cn from "../lib/class-names"
import IClassProps from "../interfaces/class-props"

const LogoIcon = ({ className }: IClassProps) => {
  return (
    <div
      className={cn(
        "block bg-gradient-to-r from-blue-500 via-cyan-500 to-rose-400 bg-clip-text text-xl font-bold text-transparent",
        className
      )}
    >
      {SITE_DOMAIN}
    </div>
  )
}

export default LogoIcon
