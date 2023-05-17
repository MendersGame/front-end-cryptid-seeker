// npm modules
import { useState } from 'react'

// components
import Icon from '../Icon/Icon'

// styles
import styles from './NewReview.module.css'

const NewReview = (props) => {
  const [formData, setFormData] = useState({text: ''})

  const handleChange = (evt) => {
    setFormData({...formData,[evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddReview(formData)
    setFormData({text: ''})
  }
  return (
    <form className={styles.newreviewcontainer} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        placeholder="Add a Review"
        onChange={handleChange}
      />
      <button type="submit"><Icon category="Create" /></button>
    </form>
  )
}

export default NewReview;