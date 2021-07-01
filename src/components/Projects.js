import React from 'react'
import ProjectMain from '../assets/images/proj_1.png'
import ReactLogo from '../assets/images/react_logo.png'
import RubyLogo from '../assets/images/ruby_logo.svg'
import RailsLogo from '../assets/images/rails_logo.svg'
import Tagline from './Tagline'
import QuoteLine from './QuoteLine'
import MyFaceGrey from '../assets/images/myface_grey.svg'

const Projects = ({dotBack, lineWidth, lineHeight, lineRotation}) => {
    return (
        <>
            <p id="projects" className="font-RacingSansOne text-4xl text-black text-center tablets:text-left tablets:pl-12 mt-16 pt-5">PROJEX</p>
            <section className={`relative ${dotBack} bg-bottom bg-no-repeat mt-4 flex justify-center pb-16 -mb-16`}>
            <div className="relative"> 
                <div className="card flex justify-center items-center">
                <img className="cover-image" src={ProjectMain} alt="main project" />
                <img className="icon absolute transform scale-25" src={ReactLogo} alt="main project" />
                </div>
                <div className="cardLower flex justify-center items-center">
                <div className="flex flex-col tablets:items-start ml-2">
                    <p className="font-RacingSansOne mb-2 text-2xl text-primaryColLite">React Caffeine Locator</p>
                    <div className="font-PoiretOne text-white">
                        <p className="mb-4 ">A React app that reveals information regarding coffee outlets in a nearby radius. Clean, styled and lightweight, it makes extensive use of the Google Maps API and employs Tailwind CSS.</p>
                        <a className="mr-4" href="/"><span className="mydot"></span><span className=" text-sm">View in browser</span></a>
                        <a className="mr-4" href="/"><span className="mydot"></span><span className=" text-sm">View in github</span></a>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <div className="flex flex-row content-start">
            <img className="transform origin-top scale-80 -ml-32" src={MyFaceGrey} alt="face" />
            <section className="pt-24">
                <div className="font-Lobster text-2xl px-1 whitespace-pre-wrap flex justify-center">
                <Tagline text={'“I’m down to one coffee a day. Still trying to give up the sugar!!”'}/>
                </div>
                <div className="pl-1">
                <QuoteLine width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
                </div>
            </section>
            </div>

            {/* Other Projects */}
            <section className={`relative ${dotBack} bg-70-v bg-no-repeat flex flex-col tablets:flex-row tablets:justify-around tablets:items-center justify-center -mt-28`}>
            <div className="relative flex flex-col items-center"> 
                <div className="card flex justify-center items-center">
                <img className="cover-image" src={ProjectMain} alt="main project" />
                <img className="icon absolute transform scale-50" src={RubyLogo} alt="main project" />
                </div>
                <div className="cardLower flex justify-center items-center">
                <div className="flex flex-col tablets:items-start ml-2">
                    <p className="font-RacingSansOne mb-2 text-2xl text-primaryColLite">Terminal R.P.S.G</p>
                    <div className="font-PoiretOne text-white">
                        <p className="mb-4 ">A (R)ole (P)laying (S)pelling (G)ame, written in Ruby and playable in the terminal. Can you defeat the horde?</p>
                        <a className="mr-4" href="/"><span className="mydot"></span><span className=" text-sm">View in github</span></a>
                    </div>
                </div>
                </div>
            </div>

            <div className="relative flex flex-col items-center mt-12 tablets:mt-0"> 
                <div className="card flex justify-center items-center">
                <img className="cover-image" src={ProjectMain} alt="main project" />
                <img className="icon absolute transform scale-50" src={RailsLogo} alt="main project" />
                </div>
                <div className="cardLower flex justify-center items-center">
                <div className="flex flex-col tablets:items-start ml-2">
                    <p className="font-RacingSansOne mb-2 text-2xl text-primaryColLite">2-Way Service App</p>
                    <div className="font-PoiretOne text-white">
                        <p className="mb-4 ">Built with Ruby on Rails, this is a booking app for venues to book signwriters and create job briefs.</p>
                        <a className="mr-4" href="/"><span className="mydot"></span><span className=" text-sm">View in browser</span></a>
                        <a className="mr-4" href="/"><span className="mydot"></span><span className=" text-sm">View in github</span></a>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <div className="flex flex-row content-start overflow-x-hidden">
                <section className="pt-16">
                    <div className="font-Lobster text-2xl pl-12 whitespace-pre-wrap flex justify-center">
                    <Tagline text={'They say Ruby is an “elegant” language. Unfortunately, it’s not very strict. I like strict.'}/>
                    </div>
                    <div className="pl-38">
                    <QuoteLine width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['-70']}/>
                    </div>
                </section>
                <img className="transform origin-top scale-80 -mr-24" src={MyFaceGrey} alt="face" />
            </div>
        </>
    )
}

export default Projects
