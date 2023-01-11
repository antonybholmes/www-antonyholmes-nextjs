import HalfStarIcon from "../icons/half-star"
import StarIcon from "../icons/star"

interface IProps {
  rating: number
  stars?: number
}

const StarRating = ({ rating, stars = 5 }: IProps) => {
  const n = Math.floor(rating)

  const items = []

  for (let i = 0; i < n; ++i) {
    items.push(
      <li
        key={i}
        className="transition-ani transition-all  fill-amber-300 hover:fill-amber-400 hover:scale-110"
      >
        <StarIcon className="w-5" />
      </li>
    )
  }

  if (rating > n) {
    items.push(
      <li
        key={items.length}
        className="transition-ani transition-all  fill-amber-300 hover:fill-amber-400 hover:scale-110"
      >
        <HalfStarIcon className="w-5" />
      </li>
    )
  }

  // Pad so each is 5 stars in length
  while (items.length < stars) {
    items.push(<li key={items.length} className="block w-5" />)
  }

  return <ul className="flex flex-row gap-1">{items}</ul>
}

export default StarRating
