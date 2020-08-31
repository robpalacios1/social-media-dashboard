import React from 'react'
import './Card-small.css'

function CardSmall({icon, pageViews, growth}) {
    return (
        <div className="card-small">
            <p className="card-small-views">Likes</p>
            <p className="card-small-icon">
                <img src={icon} alt="" />
            </p>
            <p className="card-small-number">{pageViews}</p>
            <p className="card-small-percentage is-danger">
                <span>
                    <img src="images/icon-down.svg" alt="" />
                    {growth}
                </span>
            </p>
        </div>
    )
}

export default CardSmall
