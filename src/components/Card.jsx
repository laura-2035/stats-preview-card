import React from 'react'
import '../components/Card.scss'
import imageSRC from '../assets/img/image-header-desktop.jpg'

export default props => {
    return (
    <div className="container">
        <div className="hero-image">
            <img src={imageSRC} />
        </div>
        <div className="hero-statement">
            <h1 className="hero-title">{props.title}</h1>
            <p className="hero-description">{props.description}</p>
        </div>
        
        <div className="info">
            <div className="companies">
                <h2>{props.companies}</h2>
                <p>Companies</p>
            </div>
            <div className="templates">
                <h2>{props.templates}</h2>
                <p>Templates</p>
            </div>
            <div className="queries">
                <h2>{props.queries}</h2>
                <p>Queries</p>
            </div>
        </div>
    </div>
    )
}