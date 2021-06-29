import React from "react";
import { useRouter } from "next/router";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData } from "../../lib/post-util";

function PostDetailPage(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <PostContent postData={props.postData} />;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  console.log(slug);
  const postData = getPostData(slug);
  console.log("POSTDATAKKKKKKKKK", postData);
  return {
    props: { postData },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default PostDetailPage;
