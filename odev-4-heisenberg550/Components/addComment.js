import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

function AddComment(props) {

    return (
        <div> Yorum Yazın: <br/>
            <textarea onChange={props.handleChange}></textarea> 
            <ReactStars onChange={props.handleRating}> </ReactStars>
            <button onClick={props.handleClick} > Yorum Paylaş </button>
        </div>
    )
}

export default AddComment