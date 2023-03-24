import React, { useRef, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from '@mui/material/Card';
import Button from 'react-bootstrap/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContent from '@mui/material/CardContent';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';


export default function Createpost(props) {
    const [checked, setChecked] = React.useState([true, false]);
    const [content, setContent] = useState();
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);

    const target = useRef(null);

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    const newPost = async () => {
        try {
            const dataToSend = {
                userId: props.dataUser.userId,
                title: props.dataUser.userFullName,
                content: content,
                imageURL: image
            }
            const servUrl = `https://movies-library.up.railway.app/addPost`;
            const axiosRes = await axios.post(servUrl, dataToSend);
        }
        catch (error) {

        }
    }

    return (
        <>
            <Card >
                <CardContent>
                    <Form onSubmit={newPost}>
                        <FloatingLabel controlId="floatingTextarea2" label="Create a post">
                            <Form.Control
                                onChange={handleContentChange}
                                name='content'
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className='displayflex my-2'>
                            <div className='mx-4'>
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
                            <FormControlLabel
                                control={<Checkbox checked={checked[1]}
                                    onChange={setChecked}
                                />}
                            />
                        </div>
                        <FloatingLabel className='displayflex' controlId="floatingTextarea2" label="Add an Image URL">
                            <Form.Control
                                onChange={handleImageChange}
                                name='imageURL'
                                placeholder="Attach picture URL"
                            />
                            <Button className='mx-4' type='submit' variant="secondary" >Post</Button>
                        </FloatingLabel >
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}