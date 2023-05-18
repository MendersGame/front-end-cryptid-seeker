// npm modules
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// Services
import * as sightingService from '../../services/sightingService'

// styles
import styles from './EditComment.module.css'

const EditComment = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { sightingId, commentId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sightingService.updateComment(sightingId, commentId, formData)
    navigate(`/sightings/${sightingId}`)
  }

  return (
    <article className={styles.editCommentCard}>
      <h1>Edit Comment</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </article>
  )
}

export default EditComment
