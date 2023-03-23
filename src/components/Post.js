import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Placeholder from 'react-bootstrap/Placeholder';
import image from '../assets/cover.jpg';

export default function Post() {
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Card>
                <Card.Body>
                    <div>
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
                            {pageWidth > 500 ?
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='likebutton' variant="secondary">👌 Like</Button>
                                    <Button className='commentbutton' variant="secondary" >See Post</Button>
                                </ButtonGroup> :
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='likebutton' variant="secondary">👌 Like</Button>
                                    <Button className='commentbutton' variant="secondary"> ▶ </Button>
                                </ButtonGroup>
                            }
                        </Card.Body>
                    </div>
                </Card.Body>
            </Card>
            <Card className='my-4'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6}>End of posts</Placeholder.Button>
                </Card.Body>
            </Card>
        </>
    )
}