import React from 'react';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='heading'>
                <h1>Heading</h1>
            </div>
            <div className='links'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to='contact'>contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}
