//npm modules 
import { Link } from "react-router-dom";

// components

//css 
import styles from './CryptidCard.module.css'

const CryptidCard = ({ cryptid }) => {
  return (
    <Link to ={`/cryptids/${cryptid._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{ cryptid.name }</h1>
            {/* TODO add Icon */}
          </span>
        </header>
      <p>{cryptid.description}</p>
      </article>
    </Link>
  )
}
export default CryptidCard