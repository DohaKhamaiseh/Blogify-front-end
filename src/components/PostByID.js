import React from 'react'
import { Button, ButtonGroup, Card, Form } from 'react-bootstrap'

export default function PostByID() {
    return (
        <div className='my-4'>
            <Card>
                <Card.Body>
                    <div className='headerofpost'>
                        <img className='imginpostbyid' src='https://avatars.githubusercontent.com/u/103138514?s=400&u=6e1c5ea7d722cd568da4c347c96d3738df52b36c&v=4' alt='' />
                        <div className='mx-4'>
                            <Card.Title>Abdullah Abu Hamad</Card.Title>
                            <Card.Text>
                                Today, we started thinking about our project.
                                We gathered and started on the prep work before the assignment of tasks.
                            </Card.Text>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?cs=srgb&dl=pexels-bas-masseus-1074535.jpg&fm=jpg" />
                        <hr />
                        <Form>
                            <ButtonGroup aria-label="Basic example">
                                <Button className='likebutton' variant="secondary">👌 Like</Button>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Add Comment"
                                    style={{ minHeight: '62px', width: '100%' }}
                                />
                                <Button type='submit' variant="secondary">Add comment</Button>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>

                </Card.Body>
                <Card.Body>
                    <div className='commentsection'>
                        <img className='imgincommentsect' src='https://avatars.githubusercontent.com/u/103138514?s=400&u=6e1c5ea7d722cd568da4c347c96d3738df52b36c&v=4' alt='' />
                        <div className='mx-4'>
                            <Card.Title>Abdullah Abu Hamad</Card.Title>
                            <Card.Text>
                                I think this is great and I wish you all the best 👍.
                            </Card.Text>
                        </div>
                    </div>
                    <hr />
                </Card.Body>
            </Card>
        </div >
    )
}