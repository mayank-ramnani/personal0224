import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

const PostContainer = ({ post }) => {
  if (!post) return null;
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{post.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={post.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
};

export default PostContainer;
