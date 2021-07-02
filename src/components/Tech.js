import React from 'react'
import Adobe from '../assets/images/adobe_logo.svg'
import Bash from '../assets/images/bash_logo.svg'
import Git from '../assets/images/git_logo.svg'
import Node from '../assets/images/node_logo.svg'
import Postgres from '../assets/images/postgres_logo.svg'
import Rails from '../assets/images/rails_logo.svg'
import ReactLogo from '../assets/images/react_logo.svg'
import Ruby from '../assets/images/ruby_logo.svg'
import Sass from '../assets/images/sass_logo.svg'

const Tech = () => {
    return (
        <div className="rounded-[1.375rem] bg-primaryColDark text-white font-PoiretOne mb-2 text-xl p-4 tablets:p-8">
            <h3 className="font-RacingSansOne text-3xl mb-4">Tech Stack...</h3>
            <div className="flex flex-wrap">
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Adobe} alt="Adobe" /> 
                    <p>Adobe</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Bash} alt="Bash" /> 
                    <p>Bash</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Git} alt="Git" /> 
                    <p>Git</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Node} alt="Node" /> 
                    <p>Node.js</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Ruby} alt="Ruby" /> 
                    <p>Ruby</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={ReactLogo} alt="ReactLogo" /> 
                    <p>React</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Sass} alt="Sass" /> 
                    <p>Sass</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Rails} alt="Rails" /> 
                    <p>Rails</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Postgres} alt="Postgres" /> 
                    <p>PostgreSQL</p>
                </div>
            </div>
        </div>
    )
}

export default Tech
