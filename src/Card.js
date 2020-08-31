import React from 'react'
import './Card.css'


function Card(props) {
    return (
        <article className="card twitter">
            <p className="card-title">
                <img src="images/icon-twitter.svg" alt="" />
                {props.username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">28k</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="images/icon-up.svg" alt="" />
                12 Today
            </p>
        </article>
    )
}

export default Card
