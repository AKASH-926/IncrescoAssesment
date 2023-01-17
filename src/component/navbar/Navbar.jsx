import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className='nav'>
            <ul className='nav-list'>
                <li className='logo'>JOBS</li>
                <li><input type="search" name="search" id="search" /></li>
                <li className='icon1'>icon</li>
                <li className='icon2'>icon</li>
            </ul>
        </div>
    )
}
