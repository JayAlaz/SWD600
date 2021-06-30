import React, { useState } from "react";
import "./books.css";
import like from "../assets/fav.png";
import neutral from "../assets/neutral.png"

const Single_book = (props) => {
    const [favorite, setFavorite] = useState(true);
  
    let bookObj = {}
    const callSentiment = () => {
        setFavorite(!favorite);
        bookObj = {'id':props.id,'src' : props.src, 'title':props.title,'description': props.description, 'author':props.author, 'sentiment': 'liked'}
        if(favorite === true){
            localStorage.setItem(props.id,JSON.stringify(bookObj));
        }else{
            localStorage.setItem(props.id,'');
        }
    };

    return (
        <div className="card">
            <img src={props.src} alt="" />
            <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h5>{props.author}</h5>
            {/* Toggle icons to add or remove from favorites */}
            {
                favorite ? (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={neutral}  alt="" /> <br></br>
                    <label>Add To Favorites</label>
                    </div>
                ) : (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={like}  alt="" /> <br></br>
                    <label>Favorited!</label>
                    </div>
                )
            }
            <button className="read-book-btn">Request Book</button>
            </div>
        </div>
    )
}

export default Single_book