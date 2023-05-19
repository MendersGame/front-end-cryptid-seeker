// styles
import styles from './CryptidDescription.module.css'

const CryptidDescription = (cryptid) => {
  return (
    <>
      <div className={styles.cryptidescription}>
        <img className={styles.cryptidescriptionphoto} src={cryptid.photo} />
        <h2 className={styles.cryptidCardNameH2}>{cryptid.name}</h2>
        <p>Region: {cryptid.region}</p>
      <p>{cryptid.description}</p>
      </div>
    </>
  )
}

export default CryptidDescription
