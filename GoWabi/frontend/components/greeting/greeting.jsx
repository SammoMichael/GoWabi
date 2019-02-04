import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="login-signup-container">
            <nav className="login-signup">
                <button className="login-button" onClick={() => openModal('login')}>Login</button>
                &nbsp;&nbsp;
                <button className="register-button" onClick={() => openModal('signup')}>Register</button>
            </nav>
        </div>
    );
    const personalGreeting = () => (
        <>
            <h2 className="header-name">Hi, {currentUser.username}</h2>
            <button className="header-button" onClick={logout}>Log Out</button></>
    );
    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
