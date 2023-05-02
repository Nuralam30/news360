import React from 'react';
import Link from 'next/link';
import { FaUser, FaSearch } from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className='top-nav'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container">
                    <Link className='navbar-brand' href='/'>News360</Link>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/news" className="nav-link">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sports" className="nav-link">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/travel" className="nav-link">Travel</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/culture" className="nav-link">Culture</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/tv" className="nav-link">TV</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login" className="nav-link"><FaUser className='user-icon' />Login</Link>
                        </li>
                    </ul>
                    <div className="search-box">
                        <input type="text" placeholder='Search news360' /><FaSearch className='search-icon' />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;