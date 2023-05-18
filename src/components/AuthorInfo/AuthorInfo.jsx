// components
import DateCard from '../DateCard/DateCard'
import Icon from '../Icon/Icon.jsx'

// styles
import styles from './AuthorInfo.module.css'

const AuthorInfo = (props) => {
  const { content } = props
  const photo = content.author.photo ? (
    <img className={styles.Icon} src={content.author.photo} alt="" />
  ) : (
    <Icon category="Profile" />
  )
  return (
    <div className={styles.authorContainer}>
      <section className={styles.authorInfoSection}>
        <div className={styles.authorProfileImg}>
          {photo}
        </div>
        {<h4 className={styles.authorName}>{content.author.name}</h4>}
        {<DateCard createdAt={content.createdAt} />}
      </section>
    </div>
  )
}

export default AuthorInfo
