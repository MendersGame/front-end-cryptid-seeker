// npm modules
import { Link } from "react-router-dom"

// components
import Icon from '../Icon/Icon'
import AuthorInfo from '../AuthorInfo/AuthorInfo'

// css
import styles from './BlogCard.module.css'

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`} state={blog}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{ blog.title }</h1>
            <Icon category={blog.category} />
          </span>
          <AuthorInfo content={blog} />
        </header>
        <p>{ blog.text }</p>
      </article>
    </Link>
  )
}
export default BlogCard