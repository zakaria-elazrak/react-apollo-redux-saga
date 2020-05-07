import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import {DELETE_POST, POSTS_QUERY} from '../queries/posts';

const Post = ({post, handleDelete})=>{

    return (
        <div className="container">
            <h3 className="title">{post.title}</h3>
            <p className="body">{post.body}</p>

            <button onClick={()=>handleDelete(post)}>supprimer</button>
        </div>
    )
}

export default Post;