
import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import {LOAD_POSTS, ADD_POST, REMOVE_POST} from './actionsTypes';
import {client} from '../utils/apolloProvider'
import {POSTS_QUERY, INSERT_POST, DELETE_POST} from '../queries/posts'
import { loadPostsSuccess,  addPostSuccess , deletePostSuccess} from './actions';

function* loadPosts() {
    try {
        const {data} = yield call(client.query, {query: POSTS_QUERY, fetchPolicy: 'no-cache'});
        yield put(loadPostsSuccess(data.posts))
    } catch (error) {
        console.log(error)
    }
}


function* addPost({payload: {post}}) {
    try {
        const {data} = yield call(client.mutate, {mutation: INSERT_POST, variables:{title: post.title, body: post.body}});
        yield put(addPostSuccess(data.insert_posts.returning[0]))
    } catch (error) {
        console.log(error)
    }
}


function* deletePost({payload: {post}}) {
    try {
        const {data} = yield call(client.mutate, {mutation: DELETE_POST, variables:{id: post.id}});
        yield put(deletePostSuccess(post));
    } catch (error) {
        console.log(error)
    }
}


export function* watchLoadPosts (){
    yield takeEvery(LOAD_POSTS, loadPosts);
}

export function* watchAddPost(){
    yield takeEvery(ADD_POST, addPost);
}

export function* watchDeletePost(){
    yield takeEvery(REMOVE_POST, deletePost);
}


function* postsSaga (){
    yield all([
        fork(watchLoadPosts),
        fork(watchAddPost),
        fork(watchDeletePost)
    ])
}

export default postsSaga;