//npm modules
import { useState } from 'react'
// components
import CryptidCard from '../../components/CryptidCard/CryptidCard'
import CryptidSearch from '../../components/CryptidSearch/CryptidSearch'
// css
import styles from './CryptidList.module.css'

const CryptidList = (props) => {
  const [allCryptids, setAllCryptids] = useState([])
  const [searchResults, setSearchResults] = useState([])



  const handleCryptidSearch = formData => {
    const filteredCryptidResults = props.cryptids.filter(cryptid => (
      cryptid.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredCryptidResults)
  }
  const cryptidsToDisplay = searchResults.length > 0 ? searchResults : props.cryptids;

  return (
    <main className={styles.cryptidlistcontainer}>
      <CryptidSearch handleCryptidSearch={handleCryptidSearch}/>
    {cryptidsToDisplay.map(cryptid => (
      <CryptidCard key={cryptid._id} cryptid={cryptid} />
    ))}
  </main>
  )
}

export default CryptidList