import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
export default function News() {
    const [newsArr, setNewsArr] = useState([]);

    const sendReq = async () => {
        //console.log(process.env.Deploy_URL);
        const serverURL = `http://localhost:4000/topHeadlines`;
        const response = await fetch(serverURL);
        //console.log(response);
        const data = await response.json();
        console.log(data)
        setNewsArr(data);
       
    }
    console.log(newsArr) ;

    useEffect(() => {
        sendReq();
        // console.log(newsArr);

    }, [])

    return (
        <>
          <Carousel>
            
                    <Carousel.Item  >
                        <img
                          className="d-block w-60"
                            src={newsArr[0]?.urlToImage}
                            alt={newsArr[0]?.title}
                            style={{ backgroundPosition: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>{newsArr[0]?.title}</h3>
                            <p>{newsArr[0]?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-60"
                            src={newsArr[1]?.urlToImage}
                            alt={newsArr[1]?.title}
                            style={{ backgroundPosition: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>{newsArr[1]?.title}</h3>
                            <p>{newsArr[1]?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-60"
                            src={newsArr[2]?.urlToImage}
                            alt={newsArr[2]?.title}
                        />

                        <Carousel.Caption>
                            <h3>{newsArr[2]?.title}</h3>
                            <p>
                                {newsArr[2]?.description}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                           className="d-block w-60"
                            src={newsArr[3]?.urlToImage}
                            alt={newsArr[3]?.title}
                        />

                        <Carousel.Caption>
                            <h3>{newsArr[3]?.title}</h3>
                            <p>
                                {newsArr[3]?.description}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            className="d-block w-60"
                            src={newsArr[4]?.urlToImage}
                            alt={newsArr[4]?.title}
                        />

                        <Carousel.Caption>
                            <h3>{newsArr[4]?.title}</h3>
                            <p>
                                {newsArr[4]?.description}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           
        </>
    )
}
