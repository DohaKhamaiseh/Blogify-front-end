import React from "react";
// import blog from '../images/blog.png';
// import { Image } from 'react-bootstrap';
import Team from "./Team";
// import TeamMember from './TeamMember';


function About() {

    return (
        <>
            <h1>About Us</h1>
            <p>
                Welcom to our webapplication! A Blogify webapplication where people
                can create and publish content on various topics, sharing their ideas, opinions, or experiences
                with a wider audience . Our team is committed to providing an exceptional
                user experience and we hope that you'll find our website useful and an easy-to-use.
                Thank you for visiting.
            </p>
            <Team />
        </>
    )
}
export default About;