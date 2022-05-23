import React from 'react';
import posts from '../data/posts.json';
import PageTitle from "../components/pageTitle/PageTitle";
import {Link} from "react-router-dom";

function BlogOverview(){

    return (
        <>
            <PageTitle title='Blog Overzichtspagina'/>
            <h2>Aantal blogposts: {posts.length}</h2>
            <div className='postList'>
                {posts.map((post)=>{
                    return(
                        <Link key={post.id} to={/blogposts/ + post.id}>{post.title}</Link>
                    );
                })}
            </div>
        </>
    );
}

export default BlogOverview;