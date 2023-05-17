// npm modules
import { useState } from "react";
//css

const CryptidSearch = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleChange(formData)
    setFormData({query: ''})
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
export default CryptidSearch;