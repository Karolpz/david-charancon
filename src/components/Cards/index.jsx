import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = ({id, title, image, link, title_image }) => {
    return (
        <NavLink to={`/project/${id}`}>
        <div className="card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title_image} className="card__img" />
                <h3 className="card__title">{title}</h3>
            </a>
        </div>
        </NavLink>
    )
}

export default Cards