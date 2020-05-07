import React from 'react';


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