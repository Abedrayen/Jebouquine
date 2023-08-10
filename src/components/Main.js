import React, { useState } from "react";
import { ReactDOM } from "react";
import Cards from "./Cards";
import Cantact from "./Cantact";
import axios from "axios";
import Footer from "./Footer";
import AnimatedComponent from "./AnimatedComponent";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDwDB6WrSezzuPEVtxQ_HHKHDsJ95kCHZY' + '&maxResults=30')
                .then(res => setBookData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="header" >
                <div className="row1" >
                    <h1 class="text-white-50 " id="wa1" > "Libraries store the energy that fuels the<br />imagination.
                        They open up windows to the world </h1><h1 class="text-white-50 " id="wa2">inspire us to explore and achieve < br />
                        and contribute to improving our quality of life."
                    </h1>
                </div>

                <div className="row2" >
                    <h2 > Find your Book < /h2> <div className="search" >
                        <input type="text"
                            placeholder="Choose your book "
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} /> <button class="button glow-button" >
                            Search </button> </div> <img src="./images/hedhheya.png" alt="photo" />
                </div>
            </div>
            <div className="container" >

                {< Cards book={bookData} />}
            </div>

            <div><AnimatedComponent /><Cantact /></div>

        </>
    );
}
export default Main;