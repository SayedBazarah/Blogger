import PostDetails from "../../component/post/Details";

import retriveSinglePost from "../../utilz/retrivePosts";
import retrivepostsDetails from "../../utilz/retrivepostsDetails";
import { formateTitleToURL } from "../../utilz/";

function PostDetailsPage(props) {
  return <PostDetails post={props.postData} />;
}

export async function getStaticProps(context) {
  const url = context.params.slug;
  const postData = retriveSinglePost(url);
  return {
    props: { postData },
  };
}

export async function getStaticPaths() {
  //Get all post title to pre-generate in the server-side
  const postsTitle = [];
  const posts = retrivepostsDetails();

  //Create the array of Posts Page title objects
  posts.map((item) => {
    const url = formateTitleToURL(item.title);
    postsTitle.push({ params: { slug: url } });
  });

  return {
    paths: postsTitle,
    fallback: "blocking",
  };
}

export default PostDetailsPage;
