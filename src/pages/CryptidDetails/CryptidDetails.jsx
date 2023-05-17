//npm modules
import { useEffect, useState, } from "react"
import { useParams } from 'react-router-dom'
//css
import styles from './CryptidDetails.module.css'
//pages
import Loading from '../Loading/Loading'
//service
import * as cryptidService from '../../services/cryptidService'
//components
import NewReview from "../../components/NewReview/NewReview"
import Reviews from "../../components/Reviews/Reviews"

const CryptidDetails = (props) => {
  const {cryptidId} = useParams()
  const [cryptid, setCryptid] = useState(null)

  useEffect(() => {
    const fetchCryptid = async () => {
      const data = await cryptidService.show(cryptidId)
      setCryptid(data)
    }
    fetchCryptid()
  }, [cryptidId])
  const handleAddReview = async (reviewFormData) => {
    const newReview = await cryptidService.createReview(cryptidId, reviewFormData)
    setCryptid({...cryptid, reviews: [...cryptid.reviews, newReview],})
  }

  const handleDeleteReview = async (cryptidId, reviewId) => {
    await cryptidService.deleteReview(cryptidId, reviewId)
    setCryptid({...cryptid, reviews: cryptid.reviews.filter((r) => r._id !== reviewId)})
  }

  if(!cryptid) return <Loading />
  
  return (
    <main className={styles.cryptiddetailscontainter}>
      <article>
        <header>
          <h1>{cryptid.name}</h1>
        </header>
        <p>{cryptid.description}</p>
      </article>
      <section>
        <h1>Reviews</h1>
          <NewReview handleAddReview={handleAddReview} />
          <Reviews 
            reviews={cryptid.reviews}
            user={props.user}
            cryptidId={cryptidId}
            handleDeleteReview={handleDeleteReview}
          />
      </section>
    </main>
  )
}




export default CryptidDetails