import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import News from './News'
import Post from './Post';
import Createpost from './Createpost';

export default function Home() {
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
      {pageWidth > 1024 ?
        <Row className='mx-4 my-4'>
          <Col xs={3}>
          </Col>
          <Col xs={7}>
            <Createpost />
            <section className='postsection my-4'>
              <Post />
            </section>
          </Col>
          <Col xs={2}>
            <div className='news'>
              <News />
            </div>
          </Col>
        </Row> :
        <Row className='mx-4 my-4'>
          <Col xs={12}>
            <Createpost />
            <section className='postsection my-4'>
              <Post />
            </section>
          </Col>
        </Row>}
    </>
  )
}