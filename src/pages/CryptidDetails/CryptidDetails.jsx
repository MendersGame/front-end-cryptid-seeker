import styles from './CryptidDetails.module.css'
import Loading from '../Loading/Loading'
import { useEffect, useState } from "react"
import * as cryptidService from '../../services/cryptidService'
import Cryptid from '../../assets/cryptids'

const CryptidDetails = () => {
  const {cryptidId} = useParams()
  const [cryptid, setCryptid] = useState(null)

  useEffect(() => {
    const fetchCryptid = async () => {
      const data = await cryptidService.show(cryptid)
      setCryptid(data)
    }
    fetchCryptid()
  }, [cryptidId])
  
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
      </section>
    </main>
  )
}




export default CryptidDetails