import React, { useEffect, useState } from 'react';
import Createpost from './Posts/Createpost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../profile.css'
import UserPost from './Posts/UserPost';
import Profilecard from './Posts/Profilecard'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {

  const [id, setId] = useState('');
  const [pic, setpic] = useState('');
  const [bio, setbio] = useState('');
  const [dob, setdob] = useState('');
  const [name, setname] = useState('');
  const [userData, setUserData] = useState([]);

  const user = {
    userFullName: "abd",
    email: "test65@example.com"
  }

  const addUsers = async () => {
    const axiosData = await axios.post('https://blog-post-back-end.vercel.app/addUsers', user);
    const data = axiosData.data;
    setUserData(data);
    setId(data[0].userid);
    setpic(data[0].imageurl);
    setbio(data[0].bio);
    setdob(data[0].dateofbirth);
    setname(data[0].userfullname);
    // setUserData(data[0].userid);
  }

  useEffect(() => {
    addUsers();
  }, [])

  return (
    <div>
      <Row className='mx-4'>
        <Col xs={3}>
          <Profilecard pic={pic} bio={bio} dob={dob} name={name}/>
        </Col>
        <Col xs={6}>
          <br />
          <Createpost id={id}/>
          <UserPost id={id}/>
        </Col>
        <Col xs={2}>
        </Col>
      </Row>
    </div>
  )
}