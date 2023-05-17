// npm modules
import { useState } from "react"

// styles

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
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        value={formData.query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}
export default CryptidSearch
