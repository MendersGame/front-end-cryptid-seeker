

const CryptidDescription = (cryptid) => {

  return (
    <>
    {/* <img src="" alt="" /> */}
    <div className='seperateContainer'>
    <img className={styles.cryptid} src={cryptid.photo}  /> 
    <div>{cryptid.name}</div> 
    <div>Region: {cryptid.region}</div> 
    </div>
    <div>{cryptid.description}</div>
    </>
  )
}

export default CryptidDescription;