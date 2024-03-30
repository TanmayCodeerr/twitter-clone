import React from "react";
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../assets/lets-see.jpg'

import {  } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faHashtag, faBell, faEnvelope, faTag, faGear, faFeatherPointed, faCircle } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <>
            {/* <h1>Sup!</h1>
            <img src={img} className="imagica heh"/> */}
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a className="navbar-link" href="#">
                            <FontAwesomeIcon icon={faHouse} />
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link" href="#">
                            <FontAwesomeIcon icon={faHashtag} />
                        </a>
                    </li>
                    {/* <li className="navbar-item">
                        <a className="navbar-link" href="#">
                            <FontAwesomeIcon icon={faBell} />
                        </a>
                    </li> */}
                    <li className="navbar-item">
                        <a className="navbar-link" href="#">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link" href="#">
                            <div className="post-div-surround">
                                <FontAwesomeIcon icon={faFeatherPointed} />
                            </div>
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link" href="#">
                            <FontAwesomeIcon icon={faGear} />
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar