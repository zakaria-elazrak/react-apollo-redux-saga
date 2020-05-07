import {ADD_POST, REMOVE_POST, LOAD_POSTS} from './actionsTypes'

export const addPost = (post)=>{
    return {
        type: ADD_POST,
        payload: post
    }
}

export const removePost = (post)=>{
    return {
        type: REMOVE_POST,
        payload: post
    }
}

export const loadPosts = ()=>{
    return {
        type: LOAD_POSTS,
        payload: null
    }
}

