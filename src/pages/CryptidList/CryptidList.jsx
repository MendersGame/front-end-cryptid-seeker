// npm modules
import { useState } from "react"

// components
import CryptidCard from "../../components/CryptidCard/CryptidCard"
import CryptidSearch from "../../components/CryptidSearch/CryptidSearch"

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

  return (
    <>
      <main className={styles.cryptidlistcontainer}>
        <CryptidSearch handleCryptidSearch={handleCryptidSearch} />
        {searchResults.length > 0
          ? searchResults.map((cryptid) => (
              <CryptidCard key={cryptid._id} cryptid={cryptid} />
            ))
          : props.cryptids.map((cryptid) => (
              <CryptidCard key={cryptid._id} cryptid={cryptid} />
            ))}
      </main>
    </>
  )
}

export default CryptidList
