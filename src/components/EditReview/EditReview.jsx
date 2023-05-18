// npm modules
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// Services
import * as cryptidService from '../../services/cryptidService'

// styles

const EditReview = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { cryptidId, reviewId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await cryptidService.updateReview(cryptidId, reviewId, formData)
    navigate(`/cryptids/${cryptidId}`)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Edit Review</h1>
        <label htmlFor="text-input">Edit Review</label>
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

export default EditReview