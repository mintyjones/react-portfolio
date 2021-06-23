import React from 'react'

const Tagline = ({text}) => {

    return (
        <div>
            <p className="font-Lobster text-2xl tablets:text-4xl laptops:text-5xl whitespace-pre-wrap">{text}</p>
        </div>
    )
}

export default Tagline
