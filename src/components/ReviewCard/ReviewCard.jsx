// npm modules
import { Link } from 'react-router-dom'

// components
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import Icon from '../Icon/Icon'

// styles
import styles from './ReviewCard.module.css'

const ReviewCard = ({ review, cryptidId, user, handleDeleteReview }) => {
  return (
    <main className={styles.reviewDetailsContainer}>
      <article className={styles.reviewDetailsArticle}>
        <span>
          <AuthorInfo content={review} />
        </span>
        <span>
          {review.author._id === user.profile && (
            <div className={styles.icons}>
              <Link
                to={`/cryptids/${cryptidId}/reviews/${review._id}`}
                state={review}
              >
                <Icon category="Edit" />
              </Link>
              <button onClick={() => handleDeleteReview(cryptidId, review._id)}>
                <Icon category="Trash" />
              </button>
            </div>
          )}
        </span>
        <p>{review.text}</p>
      </article>
    </main>
  )
}

export default ReviewCard