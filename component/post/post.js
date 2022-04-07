import Image from "next/image";

import Style from "./post.module.css";

const Post = (props) => {
  const { image, title, date, description } = props;
  console.log(image);
  return (
    <div className={Style.container}>
      <Image
        className={Style.image}
        src={image}
        alt={title}
        height={687}
        width={1031}
      />
      <h2>{title}</h2>
      <date>{date}</date>
      <p>{description}</p>
    </div>
  );
};
export default Post;
