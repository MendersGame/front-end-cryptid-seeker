const CryptidDescription = (cryptid) => {

  return (
    <>
    {/* <img src="" alt="" /> */}
    <div>{cryptid.name}</div>
    <div>Region: {cryptid.region}</div>
    <div>{cryptid.description}</div>
    </>
  )
}

export default CryptidDescription;