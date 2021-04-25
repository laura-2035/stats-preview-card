import React from 'react'
import '../components/Card.scss'
import imageSRCDesktop from '../assets/img/image-header-desktop.jpg'
import imageSRCMobile from '../assets/img/image-header-mobile.jpg'

export default props => {
    return (
        <div className="container">
            <div className="card">
                <div className="hero-image filter"><img className="mobile-img"src={imageSRCMobile} /></div>
                <div className="hero-statement">
                    <h1 className="hero-title">{props.title}</h1>
                    <p className="hero-description">{props.description}</p>
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
                <div className="hero-image-desktop filter">
                    <img className="desktop-img"src={imageSRCDesktop} />
                </div>
            </div>
        </div>
    )
}