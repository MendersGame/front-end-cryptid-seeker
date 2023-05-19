// npm imports
import { useState } from 'react'

// styles
import styles from './NewComment.module.css'

// components
import Icon from '../Icon/Icon'

const NewComment = (props) => {
  const [formData, setFormData] = useState({ text: '' })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddComment(formData)
    setFormData({ text: ''})
  }

  return (
    <form className={styles.newCommentContainer} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button className={styles.commentButton} type="submit"><Icon category="Create" /></button>
    </form>
  )
}

export default NewComment