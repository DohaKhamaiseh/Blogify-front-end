import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Createpost from './Createpost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../profile.css'
import { Button } from 'react-bootstrap';
import PostById from './PostByID';

export default function Profile() {
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
    <div className='my-4 mx-4'>
      {pageWidth > 500 ?
        <Row className='mx-4 my-4'>
          <Col xs={2}>
          </Col>
          <Col xs={8}>
            <Card>
              <div className='profilecard'>
                <Col xs={2}>
                  <Card.Img className='imginprofile' variant="top" src="https://avatars.githubusercontent.com/u/103138514?s=400&u=6e1c5ea7d722cd568da4c347c96d3738df52b36c&v=4" />
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <Card.Title>Abdullah Abu Hamad</Card.Title>
                    <Card.Text>
                      <p>Lorem</p>
                    </Card.Text>
                  </Card.Body>

                </Col>
                <div className='editdeletebuttons'>
                  <Button variant='primary'>Edit </Button>
                </div>

              </div>
            </Card>
            <br />
            <Createpost />
            <PostById />
          </Col>
          <Col xs={2}>
          </Col>
        </Row>
        :
        <Col xs={12}>
          <Card>
            <div className='profilecard'>
              <Col xs={2}>
                <Card.Img className='imginprofile' variant="top" src="https://avatars.githubusercontent.com/u/103138514?s=400&u=6e1c5ea7d722cd568da4c347c96d3738df52b36c&v=4" />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>Abdullah Abu Hamad</Card.Title>
                  <Card.Text>
                    <p>Lorem</p>
                  </Card.Text>
                </Card.Body>

              </Col>
              <Col>
                <div className='editdeletebuttons'>
                  <Button variant='primary'>Edit </Button>
                </div>
              </Col>
            </div>
            <br />
            <Createpost />
            <PostById />
          </Card>
        </Col>}
    </div>
  )
}