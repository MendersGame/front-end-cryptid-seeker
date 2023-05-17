// components
import CryptidCard from '../../components/CryptidCard/CryptidCard'
// css
import styles from './CryptidList.module.css'

const CryptidList = (props) => {
  return (
    <main className={styles.cryptidlistcontainer}>
    {props.cryptids.map(cryptid => (
      <CryptidCard key={cryptid._id} cryptid={cryptid} />
    ))}
  </main>
  )
}

export default CryptidList