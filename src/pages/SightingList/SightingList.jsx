// components
import SightingCard from '../../components/SightingCard/SightingCard'
// css
import styles from './SightingList.module.css'

const SightingList = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
    {props.sightings.map(blog => (
      <SightingCard key={signting._id} sighting={sighting} />
    ))}
  </main>
  )
}

export default SightingList