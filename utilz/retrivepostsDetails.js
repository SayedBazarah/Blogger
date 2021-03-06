import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function retrivePostsDetails(id) {
  const dir = path.join(process.cwd(), "data");
  const data = fs.readdirSync(dir);
  const finalData = data.map((file) => {
    const jsonData = fs.readFileSync(`${dir}\\${file}`, "utf-8");
    const data = matter(jsonData);

    return data.data;
  });
  return finalData;
}
