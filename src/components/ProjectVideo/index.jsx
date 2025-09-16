import React from 'react'

const ProjectVideo = ({ url }) => {
    return (
        <div className="project-detail__video">
            <iframe
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default ProjectVideo