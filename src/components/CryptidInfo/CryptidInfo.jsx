// css
import styles from './CryptidInfo.module.css'

const CryptidInfo = (props) => {
return (
  <>
  <img className={styles.cryptid} src={props.photo} />
  <div>{props.name}</div>
  </>
)
}

export default CryptidInfo