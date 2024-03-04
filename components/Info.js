import React from 'react'

export default function Info () {
    return (
        <div className="info-container">
            <img className ="info-img" src='./images/profile.png' alt="Profile picture"/>
                <div className="info-inner-container">
                    <h1 className="info-name">Miguel Angel <br />Donado Fernandez</h1>
                    <h3 className="info-job">Auditor and Fullstack Developer student</h3>   
                    <div className="info-inner-btn-container">
                        <a href="www.linkedin.com/in/miguel-ángel-donado-fernández" className="info-linkedin">
                            <img className="info-btn-img" src="./images/linkedin.png" width="40px"/>
                            LinkedIn
                        </a>
                    </div>
                </div>
        </div> 
    )
}