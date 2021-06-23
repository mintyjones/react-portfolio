import React from 'react'

const Navbar = ({tablet}) => {

    return (
        tablet ?
        <div className="font-RacingSansOne text-lg">
            <a className="mr-4" href="/">&lt; ABOUT &gt;</a>
            <a className="mr-4" href="/">&lt; PROJECTS &gt;</a>
            <a className="mr-4" href="/">&lt; BLOG &gt;</a>
            <a className="mr-4" href="/">&lt; CONTACT &gt;</a>
        </div>
        : null
    )
}

export default Navbar
