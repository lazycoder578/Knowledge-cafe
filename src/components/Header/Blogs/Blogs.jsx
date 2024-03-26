import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import Proptypes from "prop-types";

const Blogs = ({handleAddToBookmark}) => {
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
        <Blog key={blog.id} blog={blog}
        handleAddToBookmark = {handleAddToBookmark}
         />
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmark: Proptypes.func
};

export default Blogs;
