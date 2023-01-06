import StarIcon from "../icons/star"
import HalfStarIcon from "../icons/half-star"
import BaseRow from "./base-row"

interface IProps {
  rating: number
  stars?: number
}

const StarRating = ({ rating, stars = 5 }: IProps) => {
  const n = Math.floor(rating)

  const items = []

  for (let i = 0; i < n; ++i) {
    items.push(
      <li key={i} className="transition-transform duration-300 hover:scale-110">
        <StarIcon className="w-5" />
      </li>
    )
  }

  if (rating > n) {
    items.push(
      <li
        key={items.length}
        className="transition-transform duration-300 hover:scale-110"
      >
        <HalfStarIcon className="w-5" />
      </li>
    )
  }

  // Pad so each is 5 stars in length
  while (items.length < stars) {
    items.push(<li key={items.length} className="block w-5" />)
  }

  return (
    <BaseRow
      tag="ul"
      className="transition-color gap-1 fill-amber-300 duration-300 hover:fill-amber-200"
    >
      {items}
    </BaseRow>
  )
}

export default StarRating
