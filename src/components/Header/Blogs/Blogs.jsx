import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import Proptypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmark: Proptypes.func,
  handleMarkAsRead: Proptypes.func,
};

export default Blogs;
