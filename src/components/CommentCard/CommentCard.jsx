// npm modules
import { Link } from 'react-router-dom'

// components
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import Icon from '../Icon/Icon'

import styles from './CommentCard.module.css'

const CommentCard = ({ comment, sightingId, user, handleDeleteComment }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile && (
          <div className={styles.icons}>
              <Link
                to={`/sightings/${sightingId}/comments/${comment._id}`}
                state={comment}
              >
                <Icon category="Edit" />
              </Link>
              <button
                onClick={() => handleDeleteComment(sightingId, comment._id)}
              >
                <Icon category="Trash" />
              </button>
            </div>
          )}
        </span>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard
