import React, { useEffect, useRef, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from '@mui/material/Card';
import Button from 'react-bootstrap/Button';
import CardContent from '@mui/material/CardContent';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';

export default function Createpost(props) {

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);

    const target = useRef(null);

    const useridgetter = props.id;

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    const handleAIContent = async (e) => {
        try {
            e.preventDefault();
            const axiosAIContent = await axios.get(`https://blog-post-back-end.vercel.app/generateByAi/?title=${title}`);
            setContent(axiosAIContent.data);
        }
        catch {

        }
    }

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    const newPost = async (e) => {
        try {
            e.preventDefault();
            const dataToSend = {
                userId: useridgetter,
                title: title,
                content: content,
                imageURL: image
            }
            await axios.post('https://blog-post-back-end.vercel.app/addPost', dataToSend);
        }
        catch (error) {

        }
    }


    useEffect(() => {
        console.log(title);
        console.log(content);
    }, [title, content, image])

    return (
        <>
            <Card >
                <CardContent>
                    <Form onSubmit={newPost}>
                        <Form.Text>Create post</Form.Text>
                        <FloatingLabel controlId="floatingTextarea2" label="Add a title">
                            <Form.Control
                                onChange={handleTitleChange}
                                name='title'
                                as="textarea"
                                placeholder="Leave a comment here"
                            />
                        </FloatingLabel>
                        <FloatingLabel className='my-2' controlId="floatingTextarea2" label="">
                            <Form.Control
                                onChange={handleContentChange}
                                name='content'
                                as="textarea"
                                placeholder="Leave a comment here"
                                defaultValue={content}
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel className=' my-2' controlId="floatingTextarea2" label="Add an Image URL">
                            <Form.Control
                                onChange={handleImageChange}
                                name='imageURL'
                                placeholder="Attach picture URL"
                            />
                        </FloatingLabel >
                        <div className='mx-2 displayflex' >
                            <Button className='mx-2' value='submitpostbycontent' type='submit' variant="secondary" >Post</Button>
                            <Button className='mx-2' onClick={handleAIContent} value='submitpostbyai' type='submit' variant="secondary" >Use AI</Button>
                            <Button ref={target} onClick={() => setShow(!show)}>
                                ChatGPT Tooltip
                            </Button>
                            <Overlay target={target.current} show={show} placement="right">
                                {(props) => (
                                    <Tooltip id="overlay-example" {...props}>
                                        How to use: Write any thing about any subject press on the selector on the right and click post, ChatGPT will generate around 5 sentences worth of data.
                                    </Tooltip>
                                )}
                            </Overlay>
                        </div>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}