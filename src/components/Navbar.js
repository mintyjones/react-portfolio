import React from 'react'
import { Link } from 'react-scroll'

const Navbar = ({mobileLS}) => {

    const links = () => {
        return <>        
            <Link to="about" smooth={true} duration={1500} offset={-50}>
                <li className="list-none mr-4  hover:underline  cursor-pointer">&lt; ABOUT &gt;</li>
            </Link>
            <Link to="projects" smooth={true} duration={1500} offset={-50}>
                <li className="list-none mr-4  hover:underline  cursor-pointer">&lt; PROJECTS &gt;</li>
            </Link>
            <Link to="exp" smooth={true} duration={1500} offset={-50}>
                <li className="list-none mr-4  hover:underline cursor-pointer">&lt; EXPERIENCE &gt;</li>
            </Link>
            <Link to="contact" smooth={true} duration={1500} offset={-50}>
                <li className="list-none mr-4  hover:underline cursor-pointer">&lt; CONTACT &gt;</li>
            </Link>
            </>
        
    }

    return (
        mobileLS ?
        <div className="font-RacingSansOne text-lg flex flex-row items-end">
            {links()}
        </div>
        : null
    )
}

export default Navbar
