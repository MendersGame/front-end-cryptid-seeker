// npm modules
import { useState } from 'react'

// components
import CryptidDescription from '../CryptidDescription/CryptidDescription'
import CryptidInfo from '../CryptidInfo/CryptidInfo'

// styles
import styles from './CryptidCard.module.css'

const CryptidCard = ({ cryptid }) => {
  const [displayCryptidInfo, setDisplayCryptidInfo] = useState(true)

  function handleCryptidClick() {
    setDisplayCryptidInfo(!displayCryptidInfo)
  }

  return (
    <>
      <article className={styles.cryptidcardcontainer}>
        {displayCryptidInfo ? (
          <CryptidInfo
            name={cryptid.name}
            photo={cryptid.photo}
            Id={cryptid._id}
          />
        ) : (
          <CryptidDescription
            photo={cryptid.photo}
            name={cryptid.name}
            region={cryptid.region}
            description={cryptid.description}
          />
        )}
        <button className={styles.cryptidBtn} onClick={handleCryptidClick}>
          {displayCryptidInfo ? "Show Details" : "Hide Details"}
        </button>
      </article>
    </>
  )
}

export default CryptidCard
