import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting Started with Next Js",
  slug: "getting-started-with-next-js",
  image: "Getting-Started-with-NextJS.jpg",
  excerpt:
    "this ia asakjhsdkjsasd sdjfsfd sdfsd fsdh sdgfsd sdgfd gfdsf dfsgd fgdfgdf ",
  date: "2021-02-11",
  content: "# This is a first post",
};

const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
