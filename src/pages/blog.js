import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Post from '../components/post';
import {POSTS_QUERY, DELETE_POST} from '../queries/posts';

const Blog = ()=>{
    const { loading, error, data } = useQuery(POSTS_QUERY);

    const [deletePost, ] = useMutation(DELETE_POST, {
        update(cache, { data: { delete_posts } }) {
            const { posts } = cache.readQuery({ query: POSTS_QUERY });
        
            const filtered = posts.filter(p=> {
                return p.id != delete_posts.returning[0].id
            });
            console.log(filtered);
            cache.writeQuery({
            query: POSTS_QUERY,
            data: { posts:  filtered},
            });
        } 
    })

    const handleDelete = (post)=>{
        deletePost({variables:{id: post.id}})
    }
    return (
        <div>
            <h1>Blog</h1>
            {
                loading || data.posts.map(post => <Post key={post.id} handleDelete={handleDelete} post={post} />)
            }
        </div>
    )
}

export default Blog;