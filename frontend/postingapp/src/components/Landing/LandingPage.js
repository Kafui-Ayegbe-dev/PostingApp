import React from 'react';
import { Link } from 'react-router-dom';
//import './LandingPage.css';

export const LandingPage = () => {
    return (
        <>
        <div className="menu">
            <Link to="/signUpPage"><button className='menubtn'> Signss Up </button></Link>
            <Link to="/loginPage"><button className='menubtn'> Log In </button></Link>
            <div className="stub"></div>
        </div>
        <div>
            <div className='tip'>
                <div className='text'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat. Duis aut.
                </div>
                <div className='img'>
                    <img src="" alt='tip image'/>
                </div>
            </div>
            <div className="tip midtip">
                <div className="midimg">
                    <img src="" alt="tip image" />
                </div>
                <div className="midtext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aut.
                </div>
            </div>
            <div className='tip'>
                <div className='text'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat. Duis aut.
                </div>
                <div className='img'>
                    <img src="" alt='tip image'/>
                </div>
            </div>
            <div className="tip midtip">
                <div className="midimg">
                    <img src="" alt="tip image" />
                </div>
                <div className="midtext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aut.
                </div>
            </div>
        </div>
        <div className="footer">
            <Link to="/signUpPage"><button className='footerbtn'> Sign Up </button></Link>
            <Link to="/loginPage"><button className='footerbtn'> Log In </button></Link>
        </div>
        </>
        
    );
}

export default LandingPage;