import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';



export default function PostContent(props) {

    const Post = props.data;
    const [likes, setLikes] = useState(Post.numberoflikes); // initial number of likes from post data
    const [liked, setLiked] = useState(false); // initial liked state is false

    const handleLike = () => {
        if (!liked) {
            axios.post(`${process.env.REACT_APP_Backend_Deploy_link}increasepostlikes/${Post.postid}`)
                .then(() => {
                    setLikes(likes + 1);
                    setLiked(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            axios.post(`${process.env.REACT_APP_Backend_Deploy_link}decreespostlikes/${Post.postid}`)
                .then(() => {
                    setLikes(likes - 1);
                    setLiked(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };


    return (
        <>
            <Card key={Post.postid} className='my-2'>
                <CardContent>
                    <div className='displayflex'>
                        <img className='imageofuserinpost' src={Post.userimageurl} />
                        <Typography gutterBottom variant="h5" component="div">
                            {Post.userfullname}
                        </Typography>
                    </div>
                    <Typography gutterBottom variant="h6" component="div">
                        {Post.title}
                    </Typography>
                    <img
                        className='mx-2'
                        src={Post.imageurl}
                        title="Post Image"
                        alt=''
                    />
                    <Typography variant="body2" color="text.secondary">
                        {Post.content}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button onClick={handleLike} size="small">{liked ? 'Unlike' : 'Like'} ({likes})</Button>
                    <Button href={`/postinfo/${Post.postid}`} size="small">See More</Button>
                </CardActions>
            </Card>

        </>
    );
}