// components
import CommentCard from '../CommentCard/CommentCard'

//import styles from './Comments.module.css'  

const Comments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <>
      {props.comments.map((comment) => (
        <CommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
          sightingId={props.sightingId}
          handleDeleteComment={props.handleDeleteComment}
        />
      ))}
    </>
  )
}

export default Comments