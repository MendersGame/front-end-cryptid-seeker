import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import Icon from "../../components/Icon/Icon"
// pages
import Loading from "../Loading/Loading"

import * as sightingService from '../../services/sightingService'


import styles from './SightingDetails.module.css' 




// compontents
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import NewComment from "../../components/NewComment/NewComment"
import Comments from "../../components/Comments/Comments"

//todo create styles to import
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

  const handleAddComment = async (commentFormData) => {
    const newComment = await sightingService.createComment(sightingId, commentFormData)
    setSighting({ ...sighting, comments: [...sighting.comments, newComment],})
  }

  const handleDeleteComment = async (sightingId, commentId) => {
    await sightingService.deleteComment(sightingId, commentId)
    setSighting({ ...sighting, comments: sighting.comments.filter((c) => c._id !== commentId) })
  }

  if (!sighting) return <Loading />

  return (
    <main className={styles.container}>
      <article >
        <header>
          <h1>{sighting.title}</h1>
        </header>
        <span>
          <AuthorInfo content={sighting} />
        </span>
        <span>
          {sighting.author._id === props.user.profile && <>
          <Link to={`/sightings/${sightingId}/edit`} state={sighting}><Icon category="Edit" /></Link>
          <button onClick={() => props.handleDeleteSighting(sightingId)}><Icon category="Trash" /></button>
          </>}
        </span>
        <p>{sighting.details}</p>
      </article>
      <section>
        <h1>Comments</h1>
          <NewComment handleAddComment={handleAddComment} />
          <Comments comments={sighting.comments} user={props.user} sightingId={sightingId} handleDeleteComment={handleDeleteComment}/>
      </section>
    </main>
  )
}

export default SightingDetails