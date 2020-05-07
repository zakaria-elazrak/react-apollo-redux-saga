import React from 'react';
import { useDispatch } from 'react-redux';
import {removePost} from '../store/actions'

const Post = ({post})=>{
    const dispatch = useDispatch();

    const handleDelete = ()=>{
        dispatch(removePost(post));
    }

    return (
        <div className="container">
            <h3 className="title">{post.title}</h3>
            <p className="body">{post.body}</p>

            <button onClick={()=>handleDelete(post)}>supprimer</button>
        </div>
    )
}

export default Post;