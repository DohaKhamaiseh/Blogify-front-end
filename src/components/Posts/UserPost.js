import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Post(props) {

    const [allPostsData, setAllPostsData] = useState([]);
    const postid = props.id;

    const getAllPosts = async () => {
        const postsData = await axios.get(`https://blog-post-back-end.vercel.app/getUserPosts/${postid}`)
        const data = postsData.data;
        console.log(data);
        setAllPostsData(data);
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <>
            {allPostsData.map((e) => {
                return (
                    <Card key={e.postid} className='my-2'>
                        <CardContent>
                            <div className='displayflex'>
                                <img className='imageofuserinpost' src={e.userimageurl} />
                                <Typography gutterBottom variant="h5" component="div">
                                    {e.userfullname}
                                </Typography>
                            </div>
                            <Typography gutterBottom variant="h6" component="div">
                                {e.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {e.content}
                            </Typography>
                        </CardContent>
                        <img
                            className='mx-2'
                            src={e.imageurl}
                            title="Post Image"
                            alt=''
                        />
                        <CardActions>
                            <Button size="small">Like</Button>
                            <Button href={`/postinfo/${e.postid}`} size="small">See More</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </>
    );
}