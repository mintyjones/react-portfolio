import React from 'react'
import Work from './Work'
import Tech from './Tech'



const Experience = ({tablet}) => {

    let skewStyle = '';
    (tablet) ? skewStyle='skew-test' : skewStyle = ''

    return (
        <div className={`bg-black p-7 w-screen flex flex-col`}>
            <p className="font-RacingSansOne text-4xl text-primaryColLite">What I've Experienced</p>
            <div className="flex flex-col tablets:flex-row tablets:w-4/5">
                <br/>
                <div className="tablets:w-2/5">
                    <Work />
                </div>
                <div className="tablets:w-3/5 tablets:ml-4">
                    <Tech />
                </div>
            </div>
        </div>
    )
}

export default Experience
