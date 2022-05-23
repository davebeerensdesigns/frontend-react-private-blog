import React, {useEffect, useState} from 'react';
import posts from '../data/posts.json';
import PageTitle from "../components/pageTitle/PageTitle";
import {Link, useParams} from 'react-router-dom';

function BlogPosts() {

    const params = useParams();

    const [blogPost, setBlogPost] = useState({});

    const [blogPostFound, setBlogPostFound] = useState(false);

    useEffect(() => {
        const result = posts.find(post => post.id === params.blogId);
        if(result){
            setBlogPost(result);
            setBlogPostFound(true);
        } else {
            setBlogPostFound(false)
        }
    }, []);

    return (
        <>
            <PageTitle title='Blog post'/>
            {blogPostFound && (
                <div className='card' id={'post-' + blogPost.id}>
                    <h2>{blogPost.title}</h2>
                    <h3>{blogPost.date}</h3>
                    <p>{blogPost.content}</p>
                </div>
            )}
            {!blogPostFound && (
                <div className='card'>
                    <p>No post found</p>
                </div>
            )}
            <div className='card'>
                <Link to='/blogposts'>Terug naar overzicht</Link>
            </div>
        </>
    );
}

export default BlogPosts;