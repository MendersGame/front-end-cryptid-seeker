// css
import styles from './AuthorInfo.module.css'


import DateCard from '../DateCard/DateCard'
import Icon from '../Icon/Icon.jsx'

const AuthorInfo = (props) => {
  const { content } = props
  return (
    <div className={styles.authorContainer}>
      <section>
      <Icon category="Profile" />
        { <h4>{content.author.name}</h4> }
        { <DateCard createdAt={content.createdAt} /> }
      </section>
    </div>
  )
}

export default AuthorInfo
