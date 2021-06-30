import React, { useState } from "react";
import "./books.css";
import like from "../assets/fav.png";
import neutral from "../assets/neutral.png";

// governs the books that are in favorites tab
const Fav_book = (props) => {
    const [favorite, setFavorite] = useState(false);
    const callSentiment = () => {
        setFavorite(!favorite);
            localStorage.setItem(props.id,'');
    };
    return (
        <div className="card">
            <img src={props.src} alt="" />
            <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h5>{props.author}</h5>
            {
                favorite ? (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={neutral}  alt="" /><br></br>
                    <label>Unfavorited!</label>
                    </div>
                ) : (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={like}  alt="" /><br></br>
                    <label>Remove from Favorites</label>
                    </div>
                )
            }
            <button className="read-book-btn">Request Book</button>
            </div>
        </div>
    )
}

export default Fav_book
