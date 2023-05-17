// css
import styles from './AuthorInfo.module.css'


import DateCard from '../DateCard/DateCard'
import Icon from '../Icon/Icon.jsx'

const AuthorInfo = (props) => {
  const { content } = props
  console.log(content);
  //const photo = content.author.photo ? content.author.photo : profileIcon
  return (
    <div className={styles.authorContainer}>
      <section className={styles.authorInfoSection}>
      <div className={styles.authorProfileImg}><Icon category="Profile" /></div>
        { <h4 className={styles.authorName}>{content.author.name}</h4> }
        { <DateCard createdAt={content.createdAt} /> }
      </section>
    </div>
  )
}

export default AuthorInfo
