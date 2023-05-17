// components
import SightingCard from '../../components/SightingCard/SightingCard'
// css


const SightingList = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
    {props.sightings.map(sighting => (
      <SightingCard key={sighting._id} sighting={sighting} />
    ))}
  </main>
  )
}

export default SightingList