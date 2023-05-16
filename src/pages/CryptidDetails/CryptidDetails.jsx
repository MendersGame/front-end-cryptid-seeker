import { useEffect, useState, } from "react"
import { useParams } from 'react-router-dom'
//css
import styles from './CryptidDetails.module.css'
//pages
import Loading from '../Loading/Loading'
//components
import NewReview from "../../components/NewReview/NewReview"
//service
import * as cryptidService from '../../services/cryptidService'

const CryptidDetails = () => {
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
    const newReview = await cryptidService.createComment(cryptidId, reviewFormData)
    setCryptid({...cryptid, reviews: [...cryptid.reviews, newReview],})
  }

  if(!cryptid) return <Loading />
  
  return (
    <main className={styles.containter}>
      <article>
        <header>
          <h1>{cryptid.name}</h1>
        </header>
        <p>{cryptid.description}</p>
      </article>
      <section>
        <h1>Reviews</h1>
          <NewReview handleAddReview={handleAddReview} />
      </section>
    </main>
  )
}




export default CryptidDetails