import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = ({id, title, image, title_image }) => {
    return (
        <NavLink to={`/project/${id}`}>
        <div className="card">
            
                <img src={image} alt={title_image} className="card__img" />
                <h3 className="card__title">{title}</h3>
            
        </div>
        </NavLink>
    )
}

export default Cards