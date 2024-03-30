import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Suggestion.css'

import {  } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faGear, faCircle, faCircleCheck, faPlus, faFeatherPointed } 
from '@fortawesome/free-solid-svg-icons'

function Suggestion() {
    return (
        <>
            {/* <h1 className="the-header">Sidebar!!!</h1> */}
            <div className="main-sidebar-div right">
                <h2 className="sidebar-heading">Suggestions</h2>
                <div className="sidebar-div-1">
                    {/*///////////////////////////////////////////////////// */}
                    {/*///////////////////////////////////////////////////// */}
                    <div className="suggestion-header">
                        <div>
                            <span className="gray-headings">Who to follow?</span>
                        </div>

                        <div className="suggestion-settings">
                            <FontAwesomeIcon icon={faGear} />
                        </div>
                    </div>
                    {/*///////////////////////////////////////////////////// */}
                    {/*///////////////////////////////////////////////////// */}
                    <div className="suggestion-tab">
                        <div className="suggestion-tabs">
                            <div className="suggestions">
                                <div className="suggestion-icon first">
                                    <FontAwesomeIcon icon={faCircle}/>
                                </div>
                                <div>
                                    <span className="black-headings">Galatosaray&nbsp;</span>
                                    <FontAwesomeIcon icon={faCircleCheck} className="black-headings"/>
                                    <br />
                                    <span className="gray-headings">@GalatosaraySK</span> 
                                </div>
                            </div>
                            <div className="follow-button">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                         {/*///////////////////////////////////////////////////// */}
                         {/*///////////////////////////////////////////////////// */}
                        <div className="suggestion-tabs">
                            <div className="suggestions">
                                <div className="suggestion-icon second">
                                    <FontAwesomeIcon icon={faCircle}/>
                                </div>
                                <div>
                                    <span className="black-headings">Paris Saint-Germain&nbsp;</span>
                                    <FontAwesomeIcon icon={faCircleCheck} className="black-headings"/>
                                    <br />
                                    <span className="gray-headings">@PSG_inside</span> 
                                </div>
                            </div>
                            <div className="follow-button">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                        {/*///////////////////////////////////////////////////// */}
                        {/*///////////////////////////////////////////////////// */}
                        <div className="suggestion-tabs">
                            <div className="suggestions">
                                <div className="suggestion-icon third">
                                    <FontAwesomeIcon icon={faCircle}/>
                                </div>
                                <div>
                                    <span className="black-headings">Twitter Design&nbsp;</span>
                                    <FontAwesomeIcon icon={faCircleCheck} className="black-headings"/>
                                    <br />
                                    <span className="gray-headings">@TwitterDesign</span> 
                                </div>
                            </div>
                            <div className="follow-button">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    {/*///////////////////////////////////////////////////// */}
                    {/*///////////////////////////////////////////////////// */}
                    <div className="show-more">
                        <span>Show more</span>
                    </div>
                </div>
                <div className="sidebar-div-2">
                    <div className="sidebar-div-2-header">
                        <h2>Messi</h2>
                        <span className="hashtag-metrics">216,582 people tweeting...</span>
                    </div>
                    <div className="sidebar-div-2-post">
                        <div className="post-placeholder">
                            Tweet...
                        </div>
                        <div className="post-div-2">
                                <FontAwesomeIcon icon={faFeatherPointed} className="post-icon-2"/>
                        </div>
                    </div>
                </div>
                <div className="sidebar-div-3">
                    <h2>Twitter <br /> Redesigned!</h2>
                    <span>We've changed many things</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <a href="#check-it-out">
                        <div className="check-it-out">
                            Check it out
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Suggestion