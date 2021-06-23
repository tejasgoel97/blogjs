import React from 'react'
import PostItem from "./post-item"

function PostGrid({posts}) {
    return (
        <ul>
            {posts.map(post=><PostItem/>)}
        </ul>
    )
}

export default PostGrid
