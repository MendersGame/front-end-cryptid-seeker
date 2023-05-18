// components
import SightingCard from '../../components/SightingCard/SightingCard'

// styles
import styles from './SightingList.module.css'

const SightingList = (props) => {
  return (
    <div>
      <h1 className={styles.sightingDetailsTextDiv}>Sightings</h1>
      <main className={`${styles.listContainer} ${styles.main}`}>
        {props.sightings.map((sighting) => (
          <SightingCard key={sighting._id} sighting={sighting} />
        ))}
      </main>
    </div>
  )
}

export default SightingList
