import Proptypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    cover,
    title,
    posted_date,
    author,
    author_img,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt={`Cover Picture Of The Title ${title}`} />
      <div className="flex justify-between align-center">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: Proptypes.object.isRequired,
};

export default Blog;
