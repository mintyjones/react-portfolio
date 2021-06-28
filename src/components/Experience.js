import React from 'react'
import Work from './Work'
import Tech from './Tech'



const Experience = ({tablet}) => {

    let skewStyle = '';
    (tablet) ? skewStyle='skew-test' : skewStyle = ''

    return (
        <div className={`bg-black mt-12 p-7 w-screen`}>
            <p className="font-RacingSansOne text-4xl text-primaryColLite">What I've Experienced</p>
            <div className="flex flex-col ">
                <br/>
                <div>
                    <Work />
                </div>
                <div>
                    <Tech />
                </div>
            </div>
        </div>
    )
}

export default Experience
