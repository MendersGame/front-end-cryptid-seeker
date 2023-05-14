// assets
import add from '../../assets/icons/add_cs.svg'
import edit from '../../assets/icons/edit_cs.svg'
import trash from '../../assets/icons/trash_cs.svg'
import create from '../../assets/icons/create_cs.svg'
import comments from '../../assets/icons/comments_cs.svg'
import calendar from '../../assets/icons/calendar_cs.svg'
import profile from '../../assets/icons/profile_cs'

const Icon = ({ category }) => {
  const icons = {
    Add: add,
    Edit: edit,
    Trash: trash,
    Create: create,
    Comments: comments,
    Calendar: calendar,
    Profile: profile,

  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}