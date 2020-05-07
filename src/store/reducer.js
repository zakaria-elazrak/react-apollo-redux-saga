import {ADD_POST, REMOVE_POST, LOAD_POSTS, ADD_POST_SUCCESS, REMOVE_POST_SUCCESS, LOAD_POSTS_SUCCESS} from './actionsTypes';

const initialState= {
    posts: []
}

const posts = (state= initialState, action) =>{
    switch(action.type){
        case ADD_POST_SUCCESS:
            const newPost = action.payload;
            const newPosts = [...state.posts, newPost];
            return {...state, posts: newPosts};
        break;
        case REMOVE_POST_SUCCESS:
            const filteredPosts = state.posts.filter(p=> p.id != action.payload.id);
            return {...state, posts: filteredPosts};
        break;
        case LOAD_POSTS_SUCCESS:
            return {...state, posts: action.payload};
        break;
        default: 
           return;
    }
}

export default posts;