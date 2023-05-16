import { useState } from "react"


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
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit"><Icon category="Create" /></button>
    </form>
  )
}

export default NewReview;