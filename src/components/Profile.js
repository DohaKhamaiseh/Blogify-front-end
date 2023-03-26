import React, { useEffect, useState } from 'react';
import Createpost from './Posts/Createpost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../profile.css'
import PostById from './Posts/PostByID';
import Profilecard from './Posts/Profilecard'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {

  const [userData, setUserData] = useState();

  const user = {
    userFullName: "abd",
    email: "test65@example.com"
  }

  const addUsers = async () => {
    const axiosData = await axios.post('https://blog-post-back-end.vercel.app/addUsers', user);
    const data = JSON.stringify(axiosData.data);

    setUserData(data);
  }
  console.log(userData);

  useEffect((e) => {
    addUsers(e);
  }, [])

  return (
    <div>
      <Row className='mx-4'>
        <Col xs={3}>
          <Profilecard />
        </Col>
        <Col xs={6}>
          <br />
          <Createpost />
          <PostById />
        </Col>
        <Col xs={2}>
        </Col>
      </Row>
    </div>
  )
}