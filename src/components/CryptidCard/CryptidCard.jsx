//npm modules 
// import { Link } from "react-router-dom";
import { useState } from "react";


// components

//css 
import styles from './CryptidCard.module.css'
import CryptidDescription from "../CryptidDescription/CryptidDescription";
import CryptidInfo from "../CryptidInfo/CryptidInfo";


const CryptidCard = ({ cryptid }) => {

  const [displayCryptidInfo, setDisplayCryptidInfo] = useState(true)
  function handleCryptidClick() {
    setDisplayCryptidInfo(!displayCryptidInfo)
  }


  return (
    // <Link to ={`/cryptids/${cryptid._id}`}>
    <>
      <article className={styles.container}>
        <header>
          <span>
            {/* TODO add Icon */}
          </span>
        </header>
        {displayCryptidInfo ? 
          <CryptidInfo 
            name={cryptid.name}  
            photo={cryptid.photo}
            Id={cryptid._id}
          />
        :<CryptidDescription 
        photo={cryptid.photo}
        name= {cryptid.name} 
            region={cryptid.region}
            description={cryptid.description}
          />
        }
        <button className="cryptidBtn" onClick={handleCryptidClick}>
          {displayCryptidInfo ? 'Show Details' : 'Hide Details'}
        </button>
      </article>
      </>
    // </Link>
  )
}
export default CryptidCard