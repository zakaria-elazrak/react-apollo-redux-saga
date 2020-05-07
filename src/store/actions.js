import {ADD_POST, REMOVE_POST, LOAD_POSTS, LOAD_POSTS_SUCCESS, ADD_POST_SUCCESS, REMOVE_POST_SUCCESS} from './actionsTypes'

export const addPost = (post)=>{
    return {
        type: ADD_POST,
        payload: {post}
    }
}

export const removePost = (post)=>{
    return {
        type: REMOVE_POST,
        payload: {post}
    }
}

export const loadPosts = ()=>{
    return {
        type: LOAD_POSTS,
        payload: null
    }
}

export const loadPostsSuccess = (posts)=>{
    return {
        type: LOAD_POSTS_SUCCESS, 
        payload: {posts}
    }
}

export const addPostSuccess = (post) => {
    return {
        type: ADD_POST_SUCCESS,
        payload: {post}
    }
}

export const deletePostSuccess = (post) => {
    return {
        type: REMOVE_POST_SUCCESS,
        payload: {post}
    }
}

