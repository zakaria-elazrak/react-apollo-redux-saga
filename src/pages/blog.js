import React, { useEffect } from 'react';
import {shallowEqual,  useSelector, useDispatch } from 'react-redux';
import {loadPosts} from '../store/actions';
import Post from '../components/post';

const Blog = ()=>{
    const posts = useSelector(data => data.posts, shallowEqual);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadPosts());
    }, [])

    const handleDelete = (post)=>{
    }
    return (
        <div>
            <h1>Blog</h1>
            {
                posts && posts.map(post => <Post key={post.id} handleDelete={handleDelete} post={post} />)
            }
        </div>
    )
}

export default Blog;