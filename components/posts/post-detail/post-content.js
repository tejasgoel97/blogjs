import React from "react";
import Image from "next/image";
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

function PostContent(props) {
  const { content, title, image, slug } = props.postData;
  const imagePath = `/images/posts/${slug}/${image}`;

  const renderers = {
    image: (data) => {
      console.log("DATAA", data);
      return <Image src={data.src} width={100} height={100} />;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
