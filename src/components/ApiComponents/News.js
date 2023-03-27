import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './News.css';

export default function News() {
  const [newsArr, setNewsArr] = useState([]);
  const [readMore, setReadMore] = useState(Array(5).fill(false));

  const sendReq = async () => {
    const serverURL = 'https://blog-post-back-end.vercel.app/topHeadlines';
    const response = await fetch(serverURL);
    const data = await response.json();
    setNewsArr(data);
  };

  const toggleReadMore = (index) => {
    setReadMore((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <Carousel>
        {newsArr.slice(8,15).map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-60"
              src={item?.urlToImage}
              alt={item?.title}
           
            />
            <Carousel.Caption className="News-caption">
              <h3>
                {item?.title}
                <button className='button read-more-button' onClick={() => toggleReadMore(index)}>
                  {readMore[index] ? 'less' : 'more'}
                </button>
              </h3>
              {readMore[index] ? (
                  <p>{item?.description}</p>
                  ) : (
                  <p>{item?.content}</p>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

