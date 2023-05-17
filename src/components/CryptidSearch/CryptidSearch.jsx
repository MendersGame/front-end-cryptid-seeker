// npm modules

import { useState, useEffect } from "react";

//components

//services
//Todo import {Get Cryptid Data from new Service function? --getCryptids}

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
  return (  );
}
 
export default CryptidSearch;