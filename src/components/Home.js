import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import { useAuth0 } from '@auth0/auth0-react';
import Col from 'react-bootstrap/Col';
import News from './ApiComponents/News';
import Post from './Posts/Post';
import Createpost from './Posts/Createpost';
import axios from 'axios';

export default function Home() {

  // const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState([]);

  const user = {
    userFullName: "abd",
    email: "test65@example.com"
  }

  const addUsers = async () => {
    const axiosData = await axios.post('https://blog-post-back-end.vercel.app/addUsers', user);
    const data = axiosData.data;

    setUserData(data[0].userid);
  }
  console.log(userData);

  useEffect((e) => {
    addUsers(e);
  }, [userData])


  return (
    <>
      <Row className='mx-4 my-4'>
        <Col xs={3}>
          <div className='news'>
            <News />
          </div>
        </Col>
        <Col xs={6}>
          <Createpost />
          <Post data={userData} />
        </Col>
      </Row>
    </>
  )
}