import Proptypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-400 ml-4 mt-10 rounded-lg">
      <div>
        <h3 className="text-4xl text-center m-4 rounded-lg bg-green-400 p-2">
          Reading Time: {readingTime}
        </h3>
      </div>
      <h2 className="text-3xl text-center bg-yellow-400 m-4 rounded-lg p-2">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: Proptypes.array.isRequired,
  readingTime: Proptypes.number.isRequired,
};

export default Bookmarks;
