// assets

const Icon = ({ category }) => {
  const icons = {

  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}