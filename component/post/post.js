import Image from "next/image";
import Link from "next/link";

import Style from "./post.module.css";

const Post = (props) => {
  const { thumbnailUrl, title, date, description } = props.postDetails;
  const postUrl = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[`~!@#$%^&*()_\+=\[\]{};:'"\\|\/,.<>?\s]/g, "");
  return (
    <Link href={`/posts/${postUrl}`}>
      <div className={Style.container}>
        <Image
          className={Style.image}
          src={thumbnailUrl}
          alt={title}
          height={233}
          width={350}
          layout="responsive"
        />
        <div className={Style.postDetails}>
          <h2>{title}</h2>
          <date>{date}</date>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default Post;
