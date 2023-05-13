// npm modules
import { useState } from "react"

// css
import styles from './NewSighting.module.css'

const NewSighting = (props) => {
  const [formData, setFormData ] = useState({
    title: '',
    details: '',
    cryptid: 'cryptidId.name'
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddSighting(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Details</label>
        <textarea
          required
          type="text"
          name="details"
          id="details-input"
          value={formData.details}
          placeholder="Details"
          onChange={handleChange}
        />
        <label htmlFor="cryptid-input">Cryptid</label>
        <select
          required
          name="cryptid"
          id="cryptid-input"
          value={formData.cryptid}
          onChange={handleChange}
        >
          {/* change to make dropdown that populates with cryptid data */}
          <option value="MothMan">Moth Man</option>

        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewSighting