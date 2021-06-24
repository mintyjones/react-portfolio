import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

const Header = ({mobileLS}) => {
    return (
        <header className="bg-primaryColLite flex justify-between py-2 px-4">
            <Title />
            <Navbar mobileLS={mobileLS}/>
        </header>
    )
}

export default Header
