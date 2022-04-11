// Gray Matter convert MDX file to javascript object
// import matter from "gray-matter";

//Helper Functions { readMDXFile: to read MDX file and return object with the post data }

//Component
import Post from "./post";

import Style from "./grid.module.css";

const GridLayout = (props) => {
  const { posts } = props;
  return (
    <div className={Style.posts}>
      {posts.map((post, key) => {
        return <Post key={key} postDetails={post} />;
      })}
    </div>
  );
};
export default GridLayout;
