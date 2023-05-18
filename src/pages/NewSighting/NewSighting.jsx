// npm modules
import { useState } from 'react'

// styles
import styles from './NewSighting.module.css'

const NewSighting = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    details: '',
    cryptid: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddSighting(formData)
  }

  return (
    <>
      <h1 className={styles.sightDiv}>Report a Sighting</h1>
      <main className={styles.newsightingcontainer}>
        <form onSubmit={handleSubmit}>
          <label className={styles.newSightingLabel} htmlFor="title-input">
            Title
          </label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
          />
          <label className={styles.newSightingLabel} htmlFor="text-input">
            Details
          </label>
          <textarea
            required
            type="text"
            name="details"
            id="details-input"
            value={formData.details}
            placeholder="Details"
            onChange={handleChange}
          />
          <label className={styles.newSightingInput} htmlFor="cryptid-input">
            Cryptid
          </label>
          <select
            required
            name="cryptid"
            className={styles.newSightingInput}
            id="cryptid-input"
            value={formData.cryptid}
            onChange={handleChange}
          >
            {props.cryptids.map((cryptid) => (
              <option key={cryptid._id} value={cryptid.name}>
                {cryptid.name}
              </option>
            ))}
          </select>
          <button className={styles.newSightingSubmit} type="submit">SUBMIT</button>
        </form>
      </main>
    </>
  )
}

export default NewSighting
