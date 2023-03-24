import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Smallscreen from './Home/Smallscreen';
import Bigscreen from './Home/Bigscreen';

export default function Home() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const { user, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState();
  const [dataUser, setDataUser] = useState();
  const [postsData, setPostsData] = useState({});

  const newUser = async () => {
    try {
      const dataToSend = {
        userFullName: user.name,
        email: user.email,
        imageURL: null,
        bio: null
      }
      const servUrl = `https://movies-library.up.railway.app/addUsers`;
      const axiosRes = await axios.post(servUrl, dataToSend);
      setEmail(axiosRes.data.email);
    }
    catch (error) {

    }
  }
  const getUser = async () => {
    try {
      const userIdURL = `https://movies-library.up.railway.app/getUsers/${email}`;
      const axiosGet = await axios.get(userIdURL);
      setDataUser(axiosGet.data);
    }
    catch (error) {

    }
  }


  const allPosts = async () => {
    try {
      const moviesURL = `https://movies-library.up.railway.app/getAllPosts`;
      const axiosGet = await axios.get(moviesURL);
      setPostsData(axiosGet.data);
    }
    catch (error) {

    }
  }

  useEffect(() => {

    // allPosts();
    newUser();
    getUser();
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [postsData]);

  return (
    <>
      {pageWidth > 1024 ?
        <Row className='mx-4 my-4'>
          <Bigscreen dataUser={dataUser} postsData={postsData} />
        </Row> :
        <Row className='mx-4 my-4'>
          <Smallscreen dataUser={dataUser} postsData={postsData} />
        </Row>}
    </>
  )
}