import React from 'react';
import {Link} from "react-router-dom";
 
const Nav = ()=>{
    return (
        <div>
            <ul style={style.ul}>
                <li style={style.li}><Link to='/'>Home</Link></li>
                <li style={style.li}><Link to='/add-post'>Add Post</Link></li>
                <li style={style.li}><Link to='/manage-posts'>Manage Posts</Link></li>
            </ul>
        </div>
    )
}

const style = {
    ul :{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0
    },
    li: {
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20
    }
}

export default Nav;