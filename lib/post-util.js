import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "Blog-Posts");

function getPostData(fileName) {
  const FilePath = path.join(postDirectory, fileName);
  const slug = fileName.replace(/\.md$/, "");
  console.log("Slug is ", slug);
  const FileContent = matter(
    fs.readFileSync(FilePath, { encoding: "utf8", flag: "r" })
  );
  return { slug, ...FileContent.data, content: FileContent.content };
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);
  const allPostsContent = postFiles.map((post) => {
    return getPostData(post);
  });
  const sortedPost = allPostsContent.sort((postA, postB) => {
    return postA.date > postB.date ? -1 : 1;
  });
  return sortedPost;
}
export function featuredPosts() {
  const posts = getAllPosts();
  const fp = posts.filter((post) => post.isFeatured);
  console.log(fp);
  return fp;
}
