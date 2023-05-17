// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

// css
import styles from './EditSighting.module.css'

const EditSighting = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateSighting(formData)
  }

  return (
    <main className={styles.editContainer}>
        <h1 className={styles.editSightingText}>Edit Sighting</h1>
      <form className={styles.editSightingForm} onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input className={styles.editSightingInput}
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="cryptid-input">Cryptid</label>
        <select className={styles.editCryptidSelect} 
          required
          name="cryptid"
          id="cryptid-input"
          value={formData.cryptid}
          onChange={handleChange}
        >
          {/*  CHANGE TO MAKE DROPDOWN THAT POPULATES OUR CRYPTIDS  */}

          <option value="News"> cryptid name here </option>
        </select>
        <label htmlFor="details-input">Details</label>
        <textarea className={styles.editCryptidDetails}
          required
          type="text"
          name="details"
          id="details-input"
          value={formData.details}
          placeholder="Details"
          onChange={handleChange}
        />
        
        <button className={styles.editButton} type="submit">Save</button>
      </form>
    </main>
  )
}
export default EditSighting;