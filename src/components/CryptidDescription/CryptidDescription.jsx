import styles from './CryptidDescription.module.css'

const CryptidDescription = (cryptid) => {

  return (
    <>
    {/* <img src="" alt="" /> */}
    <img className={styles.cryptid} src={cryptid.photo} />
    <div>{cryptid.name}</div>
    <div>Region: {cryptid.region}</div>
    <div>{cryptid.description}</div>
    </>
  )
}

export default CryptidDescription;