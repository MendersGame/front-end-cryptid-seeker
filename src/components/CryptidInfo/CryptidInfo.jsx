// npm modules
import { Link } from 'react-router-dom'

// styles
import styles from './CryptidInfo.module.css'

const CryptidInfo = (props) => {
  return (
    <>
      <Link to={`/cryptids/${props.Id}`}>
        <div className={styles.cryptiddiv}><img className={styles.cryptidinfo} src={props.photo} /></div>
        <h3 className={styles.cryptidname}>{props.name}</h3>
      </Link>
    </>
  )
}

export default CryptidInfo
