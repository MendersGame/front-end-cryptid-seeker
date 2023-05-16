// components
import { Link } from "react-router-dom"
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import Icon from "../Icon/Icon"

const ReviewCard = ({ review, sightingId, user, handleDeleteReview }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={review} />
          {review.author._id === user.profile &&
            <>
              <Link to={`/sightings/${sightingId}/reviews/${review._id}`} state={review}>
                <Icon category="Edit"/>
              </Link>
              <button onClick={()=> handleDeleteReview(sightingId, review._id)}>
                <Icon category="Trash"/>
              </button>
            </>
          }
        </span>
      </header>
      <p>{review.text}</p>
    </article>
  )
}

export default ReviewCard