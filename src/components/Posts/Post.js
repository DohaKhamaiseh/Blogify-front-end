import React, { useEffect, useState } from 'react'
import axios from 'axios';


import PostContent from './PostContent';


export default function Post() {

    const [allPostsData, setAllPostsData] = useState([]);

    const getAllPosts = async () => {
        const postsData = await axios.get('https://blog-post-back-end.vercel.app/getAllPosts')
        const data = postsData.data;
        setAllPostsData(data);
    }

    useEffect(() => {
        getAllPosts();
    }, [allPostsData])

    return (
        <>
            {allPostsData.map((Post) => {
                return (

                    <PostContent key={Post.postid.toString()} data={Post} />
                )
            })}
        </>
    );
}