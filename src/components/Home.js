import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import News from './ApiComponents/News';
import Post from './Posts/Post';
import Createpost from './Posts/Createpost';
import axios from 'axios';

export default function Home(props) {

  const [id, setId] = useState('');

  const addUsers = async () => {
    const datafromAuth = {
      userFullName: props.user.name,
      email: props.user.email
    }
    const axiosData = await axios.post(`${process.env.REACT_APP_Backend_Deploy_link}addUsers`, datafromAuth);
    const data = axiosData.data;
    setId(data[0].userid)
  }

  useEffect((e) => {
    addUsers(e);

  }, [])

  return (
    <>
      <Row className='mx-4 my-4'>
        <Col xs={3}>
          <div className='news'>
            <News />
          </div>
        </Col>
        <Col xs={9}>

          <Createpost id={id} />
          <Post id={id} />
        </Col>
      </Row>
    </>
  )
}