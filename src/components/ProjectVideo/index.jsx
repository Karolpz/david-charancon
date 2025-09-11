import React from 'react'

const ProjectVideo = ({url}) => {
    return (
        <div className="projectdetail__video">
            <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
        </div>
    )
}

export default ProjectVideo