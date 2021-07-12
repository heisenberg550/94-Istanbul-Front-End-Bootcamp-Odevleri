import React from 'react'
import ReactStars from 'react-rating-stars-component'

function Comment(props) {
    return (
        <div>
            {props.commentsList.length === 0 ? <h3> Henüz Hiç Yorum Yok </h3> : props.commentsList.map( e => (<h2>{e.text} <ReactStars value={e.vote}></ReactStars></h2>) )}
        </div>
    )
}

export default Comment