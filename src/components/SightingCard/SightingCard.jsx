//npm modules 
import { Link } from "react-router-dom";

// components

import AuthorInfo from "../AuthorInfo/AuthorInfo";

//css 
import styles from './SightingCard.module.css'

const SightingCard = ({ sighting }) => {
  return (
    <Link to ={`/sightings/${sighting._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{ sighting.title }</h1>
            {/* TODO add Icon */}
          </span>
        <AuthorInfo content={sighting} />
        </header>
      <p>{sighting.description}</p>
      </article>
    </Link>
  )
}
export default SightingCard