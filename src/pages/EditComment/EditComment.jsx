// npm modules
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// Services
import * as sightingService from '../../services/sightingService'

// styles

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
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Edit Comment</h1>
        <label htmlFor="text-input">Edit Comment</label>
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
    </main>
  )
}

export default EditComment
