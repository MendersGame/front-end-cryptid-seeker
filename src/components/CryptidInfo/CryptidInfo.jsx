// npm modules
import { Link } from 'react-router-dom'

// styles
import styles from './CryptidInfo.module.css'


const CryptidInfo = (props) => {
  return (
    <>
      <Link to={`/cryptids/${props.Id}`}>
        <img className={styles.cryptidinfo} src={props.photo} />
        <div>{props.name}</div>
      </Link>
    </>
  )
}

export default CryptidInfo
