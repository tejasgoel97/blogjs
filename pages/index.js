import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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
// getting-started-with-next-js/Getting-Started-with-NextJS.jpg

function index() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default index;
