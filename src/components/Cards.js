import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import Tafasil from './Tafasil'

const Cards = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail != undefined || amount != undefined) {
                        return (<>
                            <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title"><br />{item.volumeInfo.title}<br /><br /></h3>
                                    <p className="amount">&#36; {amount}</p>
                                </div>
                            </div>
                            <Tafasil show={show} item={bookItem} onClose={() => setShow(false)} />
                        </>
                        )
                    }

                })
            }
        </>

    );
}
export default Cards;