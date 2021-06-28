import React from "react";
import AllPosts from "../../components/posts/all-posts";
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
function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
