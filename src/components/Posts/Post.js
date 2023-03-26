import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Post() {

    const [allPostsData, setAllPostsData] = useState([]);

    const getAllPosts = async () => {
        const postsData = await axios.get('https://blog-post-back-end.vercel.app/getAllPosts')
        const data = postsData.data;
        console.log(data);
        setAllPostsData(data);

    }

    useEffect(() => {
        getAllPosts();
        console.log(allPostsData);
    }, [])

    return (
        <>
            {allPostsData.map((e) => {
                return (
                    <Card className='my-2'>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {e.userfullname}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {e.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {e.content}
                            </Typography>
                        </CardContent>
                        <img
                            src={e.imageurl}
                            title="Post Image"
                            alt=''
                        />
                        <CardActions>
                            <Button size="small">Like</Button>
                            <Button size="small">See More</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </>
    );
}