//npm modules 
import { Link } from "react-router-dom";

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo";

//css 


const SightingCard = ({ sighting }) => {
  return (
    <Link to ={`/sightings/${sighting._id}`}/>
    <article className={Styles.container}>
      <header>
        <span>
          <AuthorInfo />
          <h1>{ sighting.title }</h1>
        </span>
      </header>
      <p>{}</p>

    </article>
  )
}