import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return(
        <>
        <div className="center-it">
            <div className="header-div top">
                <div className="header-text">
                    <FontAwesomeIcon icon={faSquareTwitter} />
                    &nbsp;
                    Tweeter
                </div>
                <div className="header-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Header