// npm modules
import { useState } from "react"

// css
import styles from './NewSighting.module.css'

const NewSighting = (props) => {
  console.log('props:', props)
  const [formData, setFormData ] = useState({
    title: '',
    details: '',
    cryptid: ''
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
      <p className="sightDiv">New Sighting</p>
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
          {props.cryptids.map((cryptid) => (
            <option key={cryptid._id} value={cryptid.name}>{cryptid.name}</option>
          ))}

        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
    </>
  )
}

export default NewSighting