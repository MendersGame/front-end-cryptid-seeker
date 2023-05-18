// npm modules
import { useState } from 'react'

// components
import CryptidCard from '../../components/CryptidCard/CryptidCard'
import CryptidSearch from '../../components/CryptidSearch/CryptidSearch'

// styles
import styles from './CryptidList.module.css'

const CryptidList = (props) => {
  const [searchResults, setSearchResults] = useState([])
  const handleCryptidSearch = (formData) => {
    const filteredCryptidResults = props.cryptids.filter((cryptid) =>
      cryptid.name.toLowerCase().includes(formData.query.toLowerCase())
    )
    setSearchResults(filteredCryptidResults)
  }

  const sortedCryptids = props.cryptids.sort((a, b) => {
    const nameA = a.name
    const nameB = b.name
    if (nameA < nameB) {
      return -1
    } if (nameA > nameB) {
      return 1
    } else {
      return 0
    }})
  
  return (
    <>
      <section className={styles.cryptidsearchcontainer}>
        <CryptidSearch handleCryptidSearch={handleCryptidSearch} />
      </section>
      <main className={styles.cryptidlistcontainer}>
        {searchResults.length > 0
          ? searchResults.map((cryptid) => (
              <CryptidCard key={cryptid._id} cryptid={cryptid} />
            ))
          : sortedCryptids.map((cryptid) => (
              <CryptidCard key={cryptid._id} cryptid={cryptid} />
            ))
        }
      </main>
    </>
  )
}

export default CryptidList
