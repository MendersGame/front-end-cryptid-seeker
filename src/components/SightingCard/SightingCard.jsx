//npm modules 
import { Link } from "react-router-dom";

// components
// imort thing so we can access cryptid photos
import AuthorInfo from "../AuthorInfo/AuthorInfo";

//css 
import styles from './SightingCard.module.css'

const SightingCard = ({ sighting }) => {

  return (
    <Link to ={`/sightings/${sighting._id}`}>
      <article className={styles.sightingCardContainer}>
        <header>
          <span>
            <h1>{ sighting.title }</h1>
            {/* TODO add corresponding cryptid photo */}
          </span>
        <AuthorInfo content={sighting} />
        </header>
      <p>{sighting.details}</p>
      </article>
    </Link>
  )
}
export default SightingCard