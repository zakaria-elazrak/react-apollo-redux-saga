import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import {INSERT_POST, POSTS_QUERY} from '../queries/posts'

const AddPost = ()=>{
    const [state, setState] = useState({title: "", body: ""});

    const [addPost, { data }] = useMutation(INSERT_POST, {
        update(cache, { data: { insert_posts } }) {
            const { posts } = cache.readQuery({ query: POSTS_QUERY });
            console.log(posts);
            cache.writeQuery({
            query: POSTS_QUERY,
            data: { posts: posts.concat([insert_posts.returning[0]]) },
            });
        }     
    });


    const handleChange = (e)=>{
        const {name, value} = e.target;
        setState(state => ({...state, [name]: value}))
    }
    const handleConfirm = ()=>{
        addPost({variables:{title: state.title, body: state.body}})
    }
    return (
        <div className='form'>
            <input name="title" placeholder="title" value={state.title} onChange={handleChange}/><br/>
            <textarea name="body" placeholder="body" value={state.body} onChange={handleChange}/><br/>
            <button onClick={handleConfirm}>Ajouter</button>
        </div>
    )
}

export default AddPost;