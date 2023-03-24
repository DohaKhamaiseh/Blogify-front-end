import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Post(props) {
    return (
        <>
            <Card className='my-4'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        User name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Post Content
                    </Typography>
                </CardContent>
                <CardMedia
                    src=''
                    // image={props.postData.imageURL}
                    title="Post Image"
                />
                <CardActions>
                    <Button size="small">Like</Button>
                    <Button size="small">See More</Button>
                </CardActions>
            </Card>
        </>
    );
}