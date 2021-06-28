import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";
const DUMMY_POSTS = [
  {
    title: "Getting Started with Next Js",
    slug: "getting-started-with-next-js",
    image: "Getting-Started-with-NextJS.jpg",
    excerpt:
      "this ia asakjhsdkjsasd sdjfsfd sdfsd fsdh sdgfsd sdgfd gfdsf dfsgd fgdfgdf ",
    date: "2021-02-11",
  },
  {
    title: "Getting Started with Next Js",
    slug: "getting-started-with-next-js",
    image: "Getting-Started-with-NextJS.jpg",
    excerpt:
      "this ia asakjhsdkjsasd sdjfsfd sdfsd fsdh sdgfsd sdgfd gfdsf dfsgd fgdfgdf ",
    date: "2021-02-11",
  },
  {
    title: "Getting Started with Next Js",
    slug: "getting-started-with-next-js",
    image: "Getting-Started-with-NextJS.jpg",
    excerpt:
      "this ia asakjhsdkjsasd sdjfsfd sdfsd fsdh sdgfsd sdgfd gfdsf dfsgd fgdfgdf ",
    date: "2021-02-11",
  },
];
function AllPostsPage(props) {
  console.log(props);
  return <AllPosts posts={props.posts} />;
}

//ssdsd
export async function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: { posts: posts },
  };
}
export default AllPostsPage;
