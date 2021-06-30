import React from 'react'
import books from '../assets/about.jpg';
import './about_us.css';

const About_us = () => {
    return (
        <div>
            <img src={books} className="about-us" alt="about Us" />
            <h1>About Us</h1>
            <p className="text-body">This is an E-library application created for the students of Solent University to allow for easy access to the online books supplied at Mountbatten library.<br></br><br></br>OPENING TIMES:<br></br> Monday: 9 AM - 10 PM <br></br> Tuesday: 9 AM - 10 PM <br></br> Wednesday: 9 AM - 10 PM<br></br> Thursday: 9 AM - 10 PM<br></br> Friday: 9 AM - 6 PM<br></br> Saturday: Closed.<br></br> Sunday: Closed.</p>
        </div>
    )
}

export default About_us
