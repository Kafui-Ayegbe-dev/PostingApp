import React from 'react';
import { Link } from 'react-router-dom';

import mastheadx from "../../assets/mastheadx.jpg";
import showcase1 from "../../assets/showcase1.jpg";
import showcase2 from "../../assets/showcase2.jpg";
import showcase3 from "../../assets/showcase3.jpg";

import "./LandingPage.css";

const LandingPage2 = () => {

    document.title = "Code Posts - Welcome";
  return (
    <>
        <div>
        {/* Navigation */}
        <nav className="navbar navbar-light bg-light static-top">
		    <div className="container d-flex justify-content-between">
		        <a className="navbar-brand" href="#!">Code Posts</a>
		        <div className="d-flex">
                    <Link to="/signUpPage" ><button className='btn btn-primary me-2' style={{width: '100px'}}> Sign Up </button></Link>
                    <Link to="/loginPage"><button className='btn btn-primary' style={{width: '100px'}}> Log In</button></Link>
		        </div>
		    </div>
		</nav>

        {/* Masthead */}
        <header className="masthead" style={{ backgroundImage: `url(${mastheadx})` }}>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/* Page heading */}
                            <h1 className="mb-5">Code, Ask, Learn: Your Programming Companion!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* Icons Grid */}
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                            <h3>Fully Responsive</h3>
                            <p className="lead mb-0">This App will look great on any device, no matter the size!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
                            <h3>Grow in your Stack</h3>
                            <p className="lead mb-0">Take a few minutes out of your day to learn new coding tips and tricks!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
                            <h3>Got Code? Get Answers!</h3>
                            <p className="lead mb-0">Post a coding problem and watch the community come to your aid!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Image Showcases */}
        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${showcase1})` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Find Channels Related to Topics</h2>
                        <p className="lead mb-0">Look through the public list of channels to help narrow down your search. If a channel doesn't exist? Make one!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(${showcase2})` }}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Unravel the Code: Your Questions, Our Community!</h2>
                        <p className="lead mb-0">Share your thoughts on posts and comments of other members of the community becauase sharing is (C)aring!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${showcase3})` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Add images to give more context on what you are dealing!</h2>
                        <p className="lead mb-0">Add images to show us what's really going on? It worked on your computer yesterday? Prove it!</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Call to Action */}
        <section className="call-to-action text-white text-center" id="signup" style={{ backgroundImage: `url(${mastheadx})` }}>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
						<Link to="/signUpPage" ><button className='btn btn-primary'> Sign Up </button></Link>
                    </div>
                </div>
            </div>
        </section>
        {/*  Footer */}
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Cyril Ayegbe 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>            
        </div>
    </>
    
  )
}

export default LandingPage2;