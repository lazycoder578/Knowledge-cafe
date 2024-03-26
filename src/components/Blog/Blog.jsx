import Proptypes from 'prop-types'

const Blog = ({ blog }) => {
  const { cover, title, author, reading_time } = blog;
  return (
    <div>
      <p>
        <img src={cover} alt="" />
      </p>
      <h2>Author: {author}</h2>
      <h3>Title: {title}</h3>
      <h3>Reading_Time: {reading_time}</h3>
    </div>
  );
};
Blog.propTypes = {
    blog: Proptypes.object.isRequired,
}

export default Blog;
