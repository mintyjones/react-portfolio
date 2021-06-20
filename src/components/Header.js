import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

const Header = () => {
    return (
        // <div className="w-screen flex items-end justify-between py-4 bg-primaryColLite bg-opacity-30">
        <div>
            <Title />
            <Navbar />
        </div>
    )
}

export default Header
