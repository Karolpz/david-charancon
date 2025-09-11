import React from 'react'

const InspirationItem = ({ title, description, image, reverse, image_description }) => {
    return (
        <div className={`inspiration-item ${reverse ? "reverse" : ""}`}>
            <div className="inspiration-item__image">
                <img src={image} alt={image_description} />
            </div>
            <div className="inspiration-item__content">
                <h3>{title} <span>.</span></h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InspirationItem;