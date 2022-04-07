// Gray Matter convert MDX file to javascript object
// import matter from "gray-matter";

//Helper Functions { readMDXFile: to read MDX file and return object with the post data }

//Component
import Post from "./post";

import Style from "./grid.module.css";

const GridLayout = (props) => {
  const dummyData = [
    {
      image:
        "https://images.unsplash.com/photo-1648993880088-37d4a048e6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Still life with anthurium.",
      date: "25/6/2021",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Home Decoration.",
      date: "2/6/2020",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Home Decoration.",
      date: "2/6/2020",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Home Decoration.",
      date: "2/6/2020",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className={Style.posts}>
      {dummyData.map((post) => {
        return (
          <Post
            image={post.image}
            title={post.title}
            date={post.date}
            description={post.description}
          />
        );
      })}
    </div>
  );
};
export default GridLayout;
