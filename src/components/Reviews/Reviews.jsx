import CryptidCard from "../CryptidCard/CryptidCard"

const Reviews = (props) => {
  if(!props.reviews) return <h4>No Reviews</h4>
  return ( 
    <>
    {props.reviews.map((review) => {
      <CryptidCard
        key={review._id}
        review={review}
        user={props.user}
        cryptidId={props.cryptidId}
      />
    })}
    </>
  )
}

export default Reviews;