import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const { heading, Author } = props.blogs;
    return (
        <div className='author-blog'>
            <h2>Heading: {heading}</h2>
            <h3>Author: {Author}</h3>
        </div>
    );
};

export default Blog;