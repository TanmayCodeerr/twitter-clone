import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Content.css'

import bgImg from '../assets/bg-image.png'

import {  } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faGear, faCircle, faCircleCheck, faPlus, faFeatherPointed,
faMessage, faArrowsRotate, faHeart, faArrowUpFromBracket } 
from '@fortawesome/free-solid-svg-icons'

import noway from '../assets/messi.jpg'

function Content() {
    return (
        <>
        {/* <img src={noway} className="noway"/> */}
        
                {/* https://youtu.be/-atkwqLq1js?si=tThzlCupRAdKkM3g */}
                <div className="content-divvvv" style={{backgroundImage: `url(${bgImg})`}}>
                    <div className="content-header">
                        <div className="the-svg">
                            <FontAwesomeIcon icon={faCircle} className="icon"/>
                        </div>
                        <div className="content-text">
                            <span>Dribbble </span>
                            {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
                            <span> 19 Aug</span>
                            <br />
                            <span>@dribbble</span>
                        </div>
                    </div>
                    <div className="content-footer">
                        <div className="details">
                            Suitcase handling by 
                            <span>@baspixels</span>
                            <span>#dribbble</span>
                            <span>#dribbblers</span>
                            <span>#design</span>
                        </div>
                        <div className="details-2">
                            <div>
                                <ul className="detail-metrics">
                                    <li>
                                        <FontAwesomeIcon icon={faMessage} />
                                        <span>122</span>    
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faArrowsRotate} />
                                        <span>1.8k</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span>4.3k</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="share-btn">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Content