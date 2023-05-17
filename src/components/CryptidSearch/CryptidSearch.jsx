// npm modules

import { useState, useEffect } from "react";

//components

//services
//Todo import {Get Cryptid Data from new Service function? --getCryptids}

const CryptidSearch = () => {
  const [allCryptids, setAllCryptids] = useState([])
  const [searchResults, setSearchResults] = useState([])

    useEffect(()  => {
      const fetchCryptidList = async => {
        const cryptidData = await getCryptids()
        setAllCryptids(cryptidData)
        setSearchResults(cryptidData)
      }
      fetchCryptidList()
    }, [])

    const handleCryptidSearch = formData => 
    }
  return ( 
    




  )
}

export default CryptidSearch;