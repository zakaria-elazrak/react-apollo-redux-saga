import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import {POSTS_QUERY} from '../queries/posts';


const ManagePosts = ()=>{
    const { loading, error, data } = useQuery(POSTS_QUERY);

    return (
        <div>
        </div>
    )
}

export default ManagePosts;