import styles from './CryptidDetails.module.css'
import Loading from '../Loading/Loading'
import { useEffect, useState } from "react"
import * as cryptidService from '../../services/cryptidService'

const CryptidDetails = (props) => {
  const {cryptidId} = useParams()
  const [cryptid, setCryptid] = useState(null)

  useEffect(() => {
    const fetchCryptid = async () => {
      const data = await cryptidService.show(cryptid)
      setCryptid(data)
    }
    fetchCryptid()
  }, [cryptidId])
  
  if( !cryptid) return <Loading />
  
  return (
    <main className={styles.containter}></main>
  )
}




export default CryptidDetails