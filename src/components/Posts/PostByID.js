import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostByID() {
    return (
        <>
            <Card className='my-4'>
                <CardContent className='displayflex'>
                    <CardMedia
                        src=''
                        title="userimage"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Post Content
                        </Typography>
                    </CardContent>
                    <CardMedia
                        src=''
                        // image={props.postData.imageURL}
                        title="postimage"
                    />
                </CardContent>
                <CardContent className='displayflex'>
                    <CardMedia
                        src=''
                        title="userimage"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                            Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Comment Content
                        </Typography>
                    </CardContent>
                </CardContent>
            </Card>
        </>
    )
}