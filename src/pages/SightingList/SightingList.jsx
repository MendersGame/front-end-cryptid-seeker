// components
import SightingCard from '../../components/SightingCard/SightingCard'
// css
import styles from './SightingList.module.css'

const SightingList = (props) => {
  return (
    <div> 
      <div className={styles.sightingDetailsTextDiv}>Details</div>
    <main className={`${styles.listContainer} ${styles.main}`}>
    {props.sightings.map(sighting => (
      <SightingCard key={sighting._id} sighting={sighting} />
    ))}
  </main>

  </div>
  )
}

export default SightingList