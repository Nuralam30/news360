import React from 'react';
import Link from 'next/link';

const TopNav = () => {
    return (
        <div className='top-nav'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container">
                    <Link className='navbar-brand' href='/'>News360</Link>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Home</Link>
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
                            <Link href="/TV" className="nav-link">TV</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;