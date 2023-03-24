import React from 'react'
import Col from 'react-bootstrap/Col';
import Createpost from '../Posts/Createpost';
import Post from '../Posts/Post';

export default function Smallscreen(props) {
    return (
        <>
            <Col xs={12}>
                <Createpost />
                <section className='postsection my-4'>
                    <Post />
                </section>
            </Col>
        </>
    )
}