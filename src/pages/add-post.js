import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import {INSERT_POST, POSTS_QUERY} from '../queries/posts'

const AddPost = ()=>{
    const [state, setState] = useState({title: "", body: ""});

    const [addPost, { data }] = useMutation(INSERT_POST);


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