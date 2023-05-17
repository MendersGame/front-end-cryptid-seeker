//npm modules
import { useState, useEffect } from 'react'
// components
import CryptidCard from '../../components/CryptidCard/CryptidCard'
import CryptidSearch from '../../components/CryptidSearch/CryptidSearch'
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

  const handleCryptidSearch = formData => {
    const filteredCryptidResults = allCryptids.filter(cryptid => (
      cryptid.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredCryptidResults)
  }


  return (
    <main className={styles.cryptidlistcontainer}>
      <CryptidSearch handleCryptidSearch={handleCryptidSearch}/>
    {props.cryptids.map(cryptid => (
      <CryptidCard key={cryptid._id} cryptid={cryptid} />
    ))}
  </main>
  )
}

export default CryptidList