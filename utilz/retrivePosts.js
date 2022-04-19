import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function retriveSinglePost(url) {
  //post data
  const postData = {};

  //formate URL
  const filterData = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[`~!@#$%^&*()_\+=\[\]{};:'"\\|\/,.<>?\s]/g, "");
  };

  //Get file dir to all posts data
  const dir = path.join(process.cwd(), "data");

  //Read all posts in the file
  const data = fs.readdirSync(dir);

  data.map((file) => {
    const postFile = fs.readFileSync(`${dir}\\${file}`, "utf-8");
    const data = matter(postFile);

    const postUrl = filterData(data.data.title);

    //Filter post to retrive only the one that meet url
    if (url === postUrl) {
      postData["data"] = data.data;
      postData["content"] = data.content;
    }
  });

  return postData;
}
