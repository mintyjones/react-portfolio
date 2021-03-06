import React from 'react'
import ProjectMain from '../assets/images/proj_1.png'
import ReactLogo from '../assets/images/react_logo.png'
import RubyLogo from '../assets/images/ruby_logo.svg'
import RailsLogo from '../assets/images/rails_logo.svg'
import Tagline from './Tagline'
import QuoteLine from './QuoteLine'
import MyFaceGrey from '../assets/images/myface_grey.svg'
import MyFaceGreyThought from '../assets/images/myface_grey_thought.svg'

const Projects = ({isTabletDevice, lineWidth, lineHeight, lineRotation}) => {
    return (
        <>
            <p id="projects" className="font-RacingSansOne text-4xl tablets:text-[3.5rem] text-black text-center tablets:pl-12 mt-16 tablets:mt-48 pt-5">PROJECTS</p>
            <section className={`relative bg-dot-pattern bg-[70vw] bg-bottom tablets:bg-right bg-no-repeat mt-4 flex justify-center pb-16 -mb-16`}>
            <div className="relative"> 
                <div className="card flex justify-center items-center tablets:w-[32vw] tablets:h-auto">
                <img className="cover-image" src={ProjectMain} alt="main project" />
                <img className="icon absolute transform scale-25" src={ReactLogo} alt="main project" />
                </div>
                <div className="cardLower tablets:w-[32vw] flex justify-center items-center">
                <div className="flex flex-col tablets:items-start ml-2">
                    <p className="font-RacingSansOne mb-2 text-2xl tablets:text-[2.5rem] text-primaryColLite">React Caffeine Locator</p>
                    <div className="font-PoiretOne text-white tablets:text-[1.4rem]">
                        <p className="mb-4 ">A React app that reveals information regarding coffee outlets in a nearby radius. Clean, styled and lightweight, it makes extensive use of the Google Maps API and employs Tailwind CSS.</p>
                        <a className="mr-4" href="/"><span className="mydot"></span><span className="tablets:text-[1.4rem]">View in browser</span></a>
                        <a className="mr-4" href="/"><span className="mydot"></span><span className="tablets:text-[1.4rem]">View in github</span></a>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <div className="flex flex-row content-start tablets:relative">
                <img className="transform origin-top scale-80 -ml-32 tablets:absolute tablets:top-[-480px] tablets:left-[98px] tablets:scale-150" src={MyFaceGrey} alt="face" />
                <div className="font-Lobster text-2xl px-1 mt-20 whitespace-pre-wrap tablets:text-5xl tablets:text-left tablets:pl-[300px] tablets:pt-[5vh] ">
                    <Tagline text={'???I???m down to one coffee a day. Still trying to give up the sugar!!???'}/>
                </div>
            </div>

            {/* Other Projects */}
            <section className={`relative bg-dot-pattern bg-70-v bg-no-repeat flex flex-col tablets:flex-row tablets:justify-between tablets:items-center justify-center tablets:px-16 -mt-28 tablets:mt-48 desktop:px-0 desktop:justify-around tablets:h-[370px]`}>
            <div className="relative flex flex-col items-center"> 
                <div className="card flex justify-center items-center tablets:w-[24vw] tablets:h-auto">
                <img className="cover-image" src={ProjectMain} alt="main project" />
                <img className="icon absolute transform scale-50" src={RubyLogo} alt="main project" />
                </div>
                <div className="cardLower flex justify-center items-center tablets:w-[24vw] ">
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
                <div className="card flex justify-center items-center tablets:w-[24vw] tablets:h-auto">
                <img className="cover-image" src={ProjectMain} alt="main project" />
                <img className="icon absolute transform scale-50" src={RailsLogo} alt="main project" />
                </div>
                <div className="cardLower flex justify-center items-center tablets:w-[24vw] ">
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

            <div className="flex flex-row content-start overflow-x-hidden tablets:overflow-x-visible tablets:relative tablets:flex-col-reverse">
                <div className="font-Lobster text-2xl pl-12 whitespace-pre-wrap mt-20 flex justify-center tablets:mt-0 tablets:text-5xl tablets:px-12 tablets:pt-[15vh] tablets:text-center">
                    <Tagline text={'"They say Ruby is an ???elegant??? language. Unfortunately, it???s not very strict. I like strict."'}/>
                </div>
                <img className="transform origin-top scale-80 tablets:absolute tablets:-top-100 tablets:left-[41.8vw] tablets:scale-[1.2] z-20" src={MyFaceGreyThought} alt="face" />
            </div>
        </>
    )
}

export default Projects
