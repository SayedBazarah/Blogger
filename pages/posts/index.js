import GridLayout from "../../component/post/grid";

//Function that retrive MDX files from fs
import retrivePostsDetails from "../../utilz/retrivepostsDetails";

function Posts(props) {
  return (
    <div>
      <GridLayout posts={props.postData} />
    </div>
  );
}

export default Posts;

export async function getStaticProps() {
  console.log("Hello from Server-side");
  const postData = retrivePostsDetails();
  return {
    props: { postData },
  };
}
