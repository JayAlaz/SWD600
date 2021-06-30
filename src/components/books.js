import React from 'react';
import SingleBook from "./single_book.js";
import cli from "../assets/cli.jpg";
import codingd from "../assets/codingd.jpg";
import workru from "../assets/workru.jpg";
import italian from "../assets/italian.jpg";
import ottoman from "../assets/ottoman.jpg";
import manga from "../assets/manga.jpg";
import iliad from "../assets/iliad.jpg";

// books 
const Books = () => {
    return (
      <div>
          <SingleBook
            id = {1}
            src = {cli}
            title="The CLI Book"
            description = "Writing Successful Command Line Interfaces with Node.js"
            author="Robert Kowalski"
          />
           <SingleBook 
            id = {2}
            src = {codingd}
            title="Coding For Dummies"
            description = "Learn To: Write your own lines of code and see immediate results"
            author="Nikhil Abraham"
          />
           <SingleBook 
            id = {3}
            src = {workru}
            title="Workin' It"
            description = "Rupaul's Guide to Life, Liberty, and the Pursuit of Style"
            author="Rupaul"
          />
           <SingleBook 
            id = {4}
            src = {italian}
            title="The Italian Renaissance"
            description = "Culture & Society in Italy"
            author="Peter Burke"
          />
           <SingleBook 
            id = {5}
            src = {ottoman}
            title="Lords of the Horizons"
            description = "A History Of The Ottoman Empire"
            author="Jason Goodwin"
          />
           <SingleBook 
            id = {6}
            src = {iliad}
            title="The ILiad"
            description = "A New Translation By Anthony Verity"
            author="Homer"
          />
          <SingleBook 
            id = {7}
            src = {manga}
            title="More How To Draw Manga"
            description = "Vol 1: The Basics of Character Drawing"
            author="Go Office"
          />
      </div>
    )
}

export default Books
