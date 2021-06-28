import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { featuredPosts } from "../lib/post-util";

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

function index(props) {
  const { posts } = props;
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
export async function getStaticProps() {
  const AllfeaturedPosts = featuredPosts();
  return {
    props: { posts: AllfeaturedPosts },
  };
}

export default index;
