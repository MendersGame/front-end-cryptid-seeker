// npm modules
import { Link } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

// styles
import styles from "./SightingCard.module.css"
import CryptidInfo from "../CryptidInfo/CryptidInfo"

const SightingCard = ({ sighting }) => {
  return (
    <Link to={`/sightings/${sighting._id}`}>
      <article className={styles.sightingCardContainer}>
        <header>
          <span>
            <h1>{sighting.title}</h1>
            <CryptidInfo
              name={sighting.cryptid.name}
              photo={sighting.cryptid.photo}
              Id={sighting.cryptid._id}
            />
          </span>
          <AuthorInfo content={sighting} />
        </header>
        <p>{sighting.details}</p>
      </article>
    </Link>
  )
}
export default SightingCard
