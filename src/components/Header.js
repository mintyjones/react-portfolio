import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

const Header = ({tablet, laptop, desktop, bigscreen}) => {
    return (
        <div className="bg-primaryColLite bg-opacity-30 flex items-center justify-between">
            <Title />
            <Navbar tablet={tablet} laptop={laptop} desktop={desktop} bigscreen={bigscreen}/>
        </div>
    )
}

export default Header
