//Component
import { useState } from "react";
import HeroSection from "../component/hero/hero";
import GridLayout from "../component/post/grid";

//Function that retrive MDX files from fs
import retrivePostsDetails from "../utilz/retrivepostsDetails";

export default function Home(props) {
  const postsData = [];

  props.postData.map((post) => {
    if (post.feature) {
      postsData.push(post);
    }
  });

  return (
    <div>
      <HeroSection />
      <GridLayout posts={postsData} />
    </div>
  );
}

export async function getStaticProps() {
  console.log("Hello from Server-side");
  const postData = retrivePostsDetails();
  return {
    props: { postData },
  };
}
