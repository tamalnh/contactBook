import React from 'react';
import {Link} from 'react-router-dom'

const Landing = (props) => {
    return (
        <div className="landing-home">
            <div className="welcome-slide">
                <div className="container">
                    <div className="row">
                        <div className="offset-sm-3 col-sm-6">
                            <div className="welcome-slide-content">
                                <h5>Online Contact Management App made with <span>node js and react js</span></h5>

                                <div className="slide-buttons">
                                    <a href="#">demo</a>
                                    <a href="#">github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-slide section-padding text-center" id="about">
                 <div className="container">
                    <div className="row">
                        <div className="offset-sm-3 col-sm-6">
                            <div className="section-title">
                                <h6>ABSOLUTE CONTACT MANAGEMENT WEB APPLICATION</h6>
                                <p>Complete CRUD application that helps you keep your address book updated, clean, and always available.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="single-item">
                                <span><i className="far fa-arrow-alt-circle-right"></i></span>
                                <h6>web app</h6>
                                <p>It has a clean admin dashboard user interface</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="single-item">
                                <span><i className="far fa-arrow-alt-circle-right"></i></span>
                                <h6>web app</h6>
                                <p>It has a clean admin dashboard user interface</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="single-item">
                                <span><i className="far fa-arrow-alt-circle-right"></i></span>
                                <h6>web app</h6>
                                <p>It has a clean admin dashboard user interface</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="feature-slide section-padding gray-bg" id="feature"> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="http://www.jinove.com/src/images/responsive.png" alt="featured image" />
                        </div>

                        <div className="col-sm-6">
                            <div className="featured-content"> 
                               <div className="section-title">
                                    <h4>loremipsum dolor</h4>
                                    <p>some content goes here</p>
                               </div>

                               <ul className="item-desc">
                                    <li> <span></span> Complete CRUD Application</li>
                                    <li> <span></span> Complete CRUD Application</li>
                                    <li> <span></span> Complete CRUD Application</li>
                                    <li> <span></span> Complete CRUD Application</li>
                                    <li> <span></span> Complete CRUD Application</li>
                                    <li> <span></span> Complete CRUD Application</li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;