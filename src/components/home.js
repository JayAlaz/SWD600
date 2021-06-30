import React from 'react'
import library from "../assets/library.jpg";
import "./home.css";

// Basic welcoming page.
const Home = () => {
    return (
        <div>
            <h1>Welcome To The Solent University E-Library</h1>
            <img src={library} className="library-landing-page" alt="Mountbatten Library"/>
        </div>
    )
}

export default Home
