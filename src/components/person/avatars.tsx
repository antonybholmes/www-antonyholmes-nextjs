import cn from "../../lib/class-names"
import IClassProps from "../../interfaces/class-props"
import IPostAuthor from "../../interfaces/post-author"
import Avatar from "../person/avatar"
import WrapRow from "../wrap-row"

interface IProps extends IClassProps {
  people: IPostAuthor[]
  showTitle?: boolean
  isSmall?: boolean
}

export default function Avatars({
  people,
  showTitle = false,
  isSmall = false,
  className,
}: IProps) {
  return (
    <WrapRow className={cn("gap-4", className)}>
      {people.map((person, index) => (
        <Avatar person={person} isSmall={isSmall} key={index} />
      ))}
    </WrapRow>
  )
}
