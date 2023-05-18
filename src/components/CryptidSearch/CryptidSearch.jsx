// npm modules
import { useState } from 'react'

// styles
import styles from "./CryptidSearch.module.css"

const CryptidSearch = (props) => {
  const [formData, setFormData] = useState({ query: "" })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    props.handleCryptidSearch({ ...formData, [name]: value })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleCryptidSearch(formData)
    setFormData({ query: "" })
  }
  return (
    <>
    <h1>Cryptids</h1>
    <form className={styles.searchform} onSubmit={handleSubmit}>
      <input
        className={styles.searchinput}
        type="text"
        name="query"
        autoComplete="off"
        value={formData.query}
        onChange={handleChange}
        />
      <button className={styles.searchBtn} type="submit">Search</button>
    </form>
    </>
  )
}
export default CryptidSearch
