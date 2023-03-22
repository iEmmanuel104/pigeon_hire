import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

const Header = ({ isAuthenticated, handleLogout }) => {
    return (
        <header>
            <div className='logo-container'>
                <img src={logo} className='logo' alt='logo' />
                <h1 className='site-name'>PigeonHire Admin</h1>
            </div>
            <nav>
                <ul className='menu'>
                    {isAuthenticated ? (
                        <>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/leaderboard'>Leaderboard</Link></li>
                            <li><Link to='/records'>Records</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to='/'>Register</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired
};

export default Header;
