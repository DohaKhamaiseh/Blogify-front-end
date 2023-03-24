import React from 'react'
import Col from 'react-bootstrap/Col';
import Createpost from '../Posts/Createpost';
import Post from '../Posts/Post';
import News from '../ApiComponents/News';

export default function Bigscreen(props) {

    return (
        <>
            <Col xs={3}>
                <div className='news'>
                    <News />
                </div>
            </Col>
            <Col xs={6}>
                <Createpost />
                <Post />
            </Col>
        </>
    )
}