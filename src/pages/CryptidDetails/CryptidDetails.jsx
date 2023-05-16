import { useEffect, useState, } from "react"
import { useParams } from 'react-router-dom'
//css
import styles from './CryptidDetails.module.css'
//pages
import Loading from '../Loading/Loading'
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