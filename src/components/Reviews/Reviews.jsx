import ReviewCard from '../ReviewCard/ReviewCard'



const Reviews = (props) => {
  if(!props.reviews) return <h4>No Reviews</h4>
  return ( 
    <>
    {props.reviews.map((review) => (
      <ReviewCard
        key={review._id}
        review={review}
        user={props.user}
        cryptidId={props.cryptidId}
        handleDeleteReview={props.handleDeleteReview}
      />
    ))}
    </>
  )
}

export default Reviews;