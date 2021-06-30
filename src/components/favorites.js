import React from "react";
import "./books.css";
import Favbook from "./favBook";

const Favorites = () => {
    const bookObj = [];
    const emptySpace = [];
    for(let i = 0;i < 20;i++){
        
        (localStorage.getItem(i) != null )? bookObj.push(localStorage.getItem(i)!== ''?JSON.parse(localStorage.getItem(i)):emptySpace.push(0)) : emptySpace.push(0);
    }
    
    const favBooks = bookObj.map((book) => 
    book.id?
        <Favbook
        id = {book.id}
        src = {book.src}
        title= {book.title}
        description = {book.description}
        author= {book.author}
      />:
      <div>
         
      </div>
    );
    return (
       <div>{favBooks}</div>
    )
}

export default Favorites
