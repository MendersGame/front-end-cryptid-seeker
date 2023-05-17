// css

import { Link } from 'react-router-dom'

const CryptidInfo = (props) => {

return (
  <>
  <Link to={`/cryptids/${props.Id}`}>
  <img className={styles.cryptid} src={props.photo} />
    <div>{props.name}</div>
  </Link>
  </>
)
}

export default CryptidInfo