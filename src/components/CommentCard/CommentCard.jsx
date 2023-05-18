// npm modules
import { Link } from 'react-router-dom'

// components
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import Icon from '../Icon/Icon'

import styles from './CommentCard.module.css'

const CommentCard = ({ comment, sightingId, user, handleDeleteComment }) => {
  return (
  <main className={styles.commentDetailsContainer}>
    <article className={styles.commentDetailsArticle}>
        <span>
          <AuthorInfo content={comment} />
          
        </span>
        <span>
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
      <p>{comment.text}</p>
    </article>
  </main>
  )
}

export default CommentCard
