import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

const Header = ({tablet}) => {
    return (
        <div className="bg-primaryColLite bg-opacity-30 flex items-center justify-between">
            <Title />
            <Navbar tablet={tablet}/>
        </div>
    )
}

export default Header
