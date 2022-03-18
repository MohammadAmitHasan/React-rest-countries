import React from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const blogsList = [
        { heading: 'My Tour', Author: 'Hasan Mahmud', id: 1 },
        { heading: 'My Website', Author: 'Muhammad Hasan', id: 2 },
        { heading: 'My Classes', Author: 'Amit Hasan', id: 3 },
    ]
    return (
        <div>
            <h1>This is my blogs</h1>
            <div id='blog-container'>
                {
                    blogsList.map(blog => <Blog blogs={blog} key={blog.id}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;