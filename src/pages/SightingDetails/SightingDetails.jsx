import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import Loading from "../Loading/Loading"

import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

//todo create styles to import
//import styles from '/.SightingDetails.module.css'

const SightingDetails = (props) => {
  const {sightingId} = useParams()
  const [sighting, setSighting] = useState(null)

  useEffect(() => {
    const fetchSighting = async () => {
      const data = await sightingService.show(sightingId)
      setSighting(data)
    }
    fetchSighting()
  }, [sightingId])

  console.log('Sighting State: ', sighting);
  if (!sighting) return <Loading />

  return (
    <main>
      <article>
        <header>
          <h1>{sighting.title}</h1>
        </header>
        <span>
          <AuthorInfo content={sighting} />
        </span>
        <p>{sighting.details}</p>
      </article>
    </main>
  )
}

export default SightingDetails