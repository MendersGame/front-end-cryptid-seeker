//npm modules
import { useState, useEffect } from 'react'
// components
import CryptidCard from '../../components/CryptidCard/CryptidCard'
// css
import styles from './CryptidList.module.css'
//Service
//Todo Import { getCryptids } from a service function/api call
const CryptidList = (props) => {
  const [allCryptids, setAllCryptids] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(()  => {
    const fetchCryptidList = async => {
      const cryptidData = await getCryptids()
      setAllCryptids(cryptidData)
      setSearchResults(cryptidData)
    }
    fetchCryptidList()
  }, [])

  return (
    <main className={styles.cryptidlistcontainer}>
    {props.cryptids.map(cryptid => (
      <CryptidCard key={cryptid._id} cryptid={cryptid} />
    ))}
  </main>
  )
}

export default CryptidList