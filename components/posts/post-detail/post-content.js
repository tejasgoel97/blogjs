import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

function PostContent(props) {
  const { content, title, image, slug } = props.postData;
  const imagePath = `/images/posts/${slug}/${image}`;

  const renderers = {
    image: (data) => {
      console.log("DATAA", data);
      return <Image src={data.src} width={100} height={100} />;
    },
    code: (data) => {
      console.log(data);
      return (
        <SyntaxHighlighter
          language="javascript"
          style={materialDark}
          showLineNumbers
        >
          {data.node.value}
        </SyntaxHighlighter>
      );
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
