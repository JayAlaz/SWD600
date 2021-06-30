import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import logo from "./assets/logo.jpeg";
import Books from "./components/books";
import Home from "./components/home";
import Favorites from "./components/favorites";
import Aboutus from "./components/about_us";
import "./components/body.css";
import "./components/header.css";

function App() {
  // functions to hide or display the mobile nav view.
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const [navChoice, setNavChoice] = useState('home');
  const callHome = () => setNavChoice('home');
  const callBooks = () => setNavChoice('books');
  const callFav = () => setNavChoice('favorite');
  const callAboutUs = () => setNavChoice('about');
  
  return (
    <div className="Container">
      {/* The app is mobile responsive.*/}
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <a href="/#">
                <img className="logoStyle" src={logo} alt="Solent Logo" />
              </a>
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callHome}>Home</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callBooks}>Books</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callFav}>Favorites</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callAboutUs}>About Us</a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>
        {/* ============= End Of Navigation =============== */}

        {/* ============= Beginning Of Body =============== */}
        <div className="body-container">
        { 
          {
              'home': <Home className="body-container" />,
              'books': <Books className="body-container" />,
              'favorite': <Favorites className="body-container" />,
              'about': <Aboutus className="body-container" />
          }[navChoice]
        }
        {/* ============ End Of Body ====================== */}
        </div>
    </div>
  );
}

export default App;
