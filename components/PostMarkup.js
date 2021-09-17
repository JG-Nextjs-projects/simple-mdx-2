import PostMeta from "./PostMeta"
import PostHeader from "./PostHeader"

const PostMarkup = ({ children, meta }) => {
  return (
    <>
      <PostMeta meta={meta} />
      <article>
        <PostHeader meta={meta} />
        <div className="entry">
          {children}
        </div>
      </article>
    </>
  )
}

export default PostMarkup