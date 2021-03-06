import React from 'react'
import Title from './Title'
import Navbar from './Navbar'
import DarkModeSwitch from './DarkModeSwitch'

const Header = ({mobileLS}) => {
    return (
        <header className="bg-primaryColLite flex justify-between py-2 px-4 sticky top-0 z-50 bg-opacity-90">
            <Title />
            <Navbar mobileLS={mobileLS}/>
            <DarkModeSwitch/>
        </header>
    )
}

export default Header
