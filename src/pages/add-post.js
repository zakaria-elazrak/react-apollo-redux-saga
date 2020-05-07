import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addPost} from '../store/actions'

const AddPost = ()=>{
    const [state, setState] = useState({title: "", body: ""});
    const dispatch = useDispatch();



    const handleChange = (e)=>{
        const {name, value} = e.target;
        setState(state => ({...state, [name]: value}))
    }
    const handleConfirm = ()=>{
        dispatch(addPost(state));
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