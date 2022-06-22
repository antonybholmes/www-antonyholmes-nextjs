import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VCenterRow from './v-center-row'

interface IProps {
  rating: number
}

const StarRating = ({ rating }: IProps) => {
  const n = Math.floor(rating)

  const stars = []

  for (let i = 0; i < n; ++i) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        size="lg"
        className="text-emerald-400 mr-1"
        key={stars.length}
      />
    )
  }

  if (rating > n) {
    stars.push(
      <FontAwesomeIcon
        icon={faStarHalfAlt}
        size="lg"
        className="text-emerald-400"
        key={stars.length}
      />
    )
  }

  // Pad so each is 5 stars in length
  while (stars.length < 5) {
    stars.push(
      <FontAwesomeIcon
        icon={faEmptyStar}
        size="lg"
        className="text-emerald-400"
        key={stars.length}
      />
    )
  }

  return (
    <VCenterRow>
      {/* <div className="font-semibold text-lg mr-2">{rating.toPrecision(2)}</div> */}
      {stars}
    </VCenterRow>
  )
}

export default StarRating
