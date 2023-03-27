import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import {
    Box,
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Button,
    TextField,
} from '@mui/material';
import ModelComment from '../Posts/ModelComment';
import ModelPost from '../Posts/ModelPost';



export default function PostByID() {

    const userId = 3;
    const ParamsObj = useParams();
    const postId = ParamsObj.id;
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [CommentSelected, setCommentSelected] = useState([]);
    const [showCommentFlag, setshowCommentFlag] = useState(false);
    const [showPostFlag, setshowPostFlag] = useState(false);
    const getPost = async () => {
        const axiosData = await axios.get(`https://blog-post-back-end.vercel.app/getPostById/${postId}`);
        const data = axiosData.data;
        setPost(data[0]);
    }

    const getComments = async () => {
        const axiosData = await axios.get(`https://blog-post-back-end.vercel.app/getAllComment/${postId}`);
        const data = axiosData.data;
        setComments(data);
    }

    useEffect(() => {
        getPost();
        getComments();
    }, []);

    const handleAddComment = async () => {
        if (newComment !== '') {
            await axios.post(`https://blog-post-back-end.vercel.app/saveComment`, {
                postId: postId,
                userId: userId,
                Content: newComment,
            });
            getComments();
            setNewComment("");
        }
    };


    const handleDeleteComment = async (commentId) => {
        await axios.delete(`https://blog-post-back-end.vercel.app/deleteComment/${commentId}`);
        setComments(comments.filter((comment) => comment.commentid !== commentId));
    };

    const handleEditComment = async (commentId, newContent) => {
        await axios.put(`https://blog-post-back-end.vercel.app/updateComment/${commentId}`, {
            Content: newContent
        });
        getComments();

    };

    const handleDeletePost = async () => {
        await axios.delete(`https://blog-post-back-end.vercel.app/deletepost/${postId}`);
        window.location.href = "/"; // redirect to home page after deleting the post
    };

    const handleEditPost = async (data) => {
        const obj = data;
        if (obj.title === '') {
            obj.title = post.title;
        }
        if (obj.imageURL === '') {
            obj.imageURL = post.imageurl;
        }
        if (obj.content === '') {
            obj.content = post.content;
        }
        console.log(obj.imageURL);
        try {
            await axios.put(`https://blog-post-back-end.vercel.app/updatepost/${postId}`, {
                "title": obj.title,
                "content": obj.content,
                "imageURL": obj.imageURL
            });
            getPost();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handlePostShow = () => {

        setshowPostFlag(true);

    }
    const handlePostClose = () => {
        setshowPostFlag(false);

    }
    const handleCommentShow = () => {

        setshowCommentFlag(true);

    }
    const handleCeommentClose = () => {
        setshowCommentFlag(false);

    }

    const handleCeommentSelected = (comment) => {
        setCommentSelected(comment);
        handleCommentShow();
    }



    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={8}>
                    {post && (
                        <Card sx={{ mb: 2 }}>
                            <CardHeader
                                avatar={<Avatar src={post.userimageurl} />}
                                title={post.title}
                                subheader={`By ${post.userfullname} on ${new Date(post.created_at).toLocaleDateString()}`}
                            />
                            <CardMedia
                                sx={{ height: 0, paddingTop: '56.25%' }}
                                image={post.imageurl}
                                title={post.title}
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    {post.content}
                                </Typography>
                            </CardContent>
                            {userId === post.userid && (
                                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={handlePostShow}

                                    /*onClick={() => handleEditPost(post.postid)}*/
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={() => handleDeletePost(post.postid)}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            )}
                        </Card>
                    )}
                    {userId && (
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Add Comment
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Comment"
                                    multiline
                                    rows={4}
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                                <Button variant="contained" onClick={handleAddComment}>
                                    Add Comment
                                </Button>

                            </CardContent>
                        </Card>

                    )}

                    {comments.map((comment) => (
                        <Card key={comment.commentid} sx={{ mb: 2 }}>
                            <CardHeader
                                avatar={<Avatar src={comment.userimageurl} />}
                                title={comment.userfullname}
                                subheader={`Commented on ${new Date(comment.created_at).toLocaleDateString()}`}
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    {comment.content}
                                </Typography>

                            </CardContent>
                            {userId === comment.userid && (
                                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={() => handleCeommentSelected(comment)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={() => handleDeleteComment(comment.commentid)}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>

                            )}

                        </Card>
                    ))}
                    <ModelComment key={CommentSelected.commentid} comment={CommentSelected} showFlag={showCommentFlag} handleClose={handleCeommentClose} handleEditComment={handleEditComment} />
                    <ModelPost key={postId} post={post} showFlag={showPostFlag} handleClose={handlePostClose} handleEditPost={handleEditPost} />
                </Grid>
            </Grid>
        </Box>


    );
}

