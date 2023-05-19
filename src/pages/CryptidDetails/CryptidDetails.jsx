// npm modules
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import NewReview from '../../components/NewReview/NewReview'
import Reviews from '../../components/Reviews/Reviews'

// pages
import Loading from '../Loading/Loading'

// services
import * as cryptidService from '../../services/cryptidService'

// styles
import styles from './CryptidDetails.module.css'

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
    <>
    <h1 className={styles.cryptidDetailsTextDiv}>Description</h1>
    <main className={styles.cryptidDetailsContainer}>
      <article className={styles.cryptidDetailsArticle}>
        <header>
          <h1 className={styles.cryptidNameH1}>{cryptid.name}</h1>
        </header>
        <span>
        {<img className={styles.cryptidDetailsImg} src={cryptid.photo}></img>}
        </span>
        <p>{cryptid.description}</p>
      </article>
      <section className={styles.cryptidReviewsContainer}>
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
    </>
  )
}

export default CryptidDetails
