// styles
import styles from './CryptidDescription.module.css'

const CryptidDescription = (cryptid) => {
  return (
    <>
      <div className={styles.cryptidescription}>
        <img className={styles.cryptidescriptionphoto} src={cryptid.photo} />
        <div>{cryptid.name}</div>
        <div>Region: {cryptid.region}</div>
      </div>
      <div>{cryptid.description}</div>
    </>
  )
}

export default CryptidDescription
