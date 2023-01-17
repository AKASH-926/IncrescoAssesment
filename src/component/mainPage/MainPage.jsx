import React from 'react'
import Cardcontainer from '../cards/Cardcontainer'
import Navbar from '../navbar/Navbar'
import Sidebar from '../side bar/Sidebar'
import './Mainpage.css'
export default function
    () {
    return (
        <div>
            <Navbar />
            <div className='main-section'>
                <Sidebar />
                <Cardcontainer />
            </div>

        </div>
    )
}
