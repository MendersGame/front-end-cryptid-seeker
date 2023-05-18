// npm modules
import { Link } from 'react-router-dom'

// components
import AuthorInfo from '../AuthorInfo/AuthorInfo'

// styles
import styles from './SightingCard.module.css'

const SightingCard = ({ sighting, cryptids }) => {
  //console.log(sighting)
  const cryptid = cryptids.find(c => c._id === sighting.cryptid)
  return (
    <Link to={`/sightings/${sighting._id}`}>
      <article className={styles.sightingCardContainer}>
        <header>
          <span>
            <h1>{sighting.title} </h1>
            {cryptid.name}
            <img src={cryptid.photo}/>
          </span>
          <AuthorInfo content={sighting} />
        </header>
        <p>{sighting.details}</p>
      </article>
    </Link>
  )
}
export default SightingCard
