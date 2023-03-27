import React from "react";
import  './About.css';
// import blog from '../images/blog.png';
// import { Image } from 'react-bootstrap';
import Team from "./Team";
// import TeamMember from './TeamMember';


function About() {
   
    return (
        <>
        <div className="every">
        <div className="wrapper">
            <div className="test">
                <article>
                    <h1>About Us</h1>
                    <blockquote>
                    Welcom to our webapplication! A Blogify webapplication where people 
                can create and publish content on various topics, sharing their ideas, opinions, or experiences
                 with a wider audience . Our team is committed to providing an exceptional 
                 user experience and we hope that you'll find our website useful and an easy-to-use.
                 Thank you for visiting.
                    </blockquote>
                </article>
            </div>
        </div>

        </div>

        <Team/>    
        </>
    )
}
export default About;