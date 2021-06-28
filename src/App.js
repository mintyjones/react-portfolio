import React from 'react'

import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import Face from './components/Face'
import DotPattern from './assets/images/dot_pattern.svg'
import MyFace from './assets/images/myface.svg'
import MyFaceWht from './assets/images/myface_white.svg'
import MyFaceGrey from './assets/images/myface_grey.svg'
import MyFaceGreyThought from './assets/images/myface_grey_thought.svg'
import ProjectMain from './assets/images/proj_1.png'
import ReactLogo from './assets/images/react_logo.png'
import RubyLogo from './assets/images/ruby_logo.svg'
import RailsLogo from './assets/images/rails_logo.svg'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tagline from './components/Tagline'
import QuoteLine from './components/QuoteLine'
import BottomNav from './components/BottomNav'

const App = () => {

  //screen breakpoints

  const isMobileLS = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 992px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1280px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1536px )",
  });

  // const initialState = {
  //   mobile: isMobile,
  //   tablet: isTabletDevice,
  //   laptop: isLaptop,
  //   desktop: isDesktop,
  //   bigscreen: isBigScreen
  // }

  // const {store, dispatch} =  useReducer(reducer, initialState)
  // const { mobile, tablet, laptop, desktop, bigscreen}
  const lineWidth = {
    'sml': 'w-1',
    'med': 'w-8',
    'big': 'w-16'
  }

  const lineHeight = {
    'sml': 'h-16',
    'med': 'h-28',
    'big': 'h-44'
  }

  const lineRotation = {
    '45': 'rotate-45',
    '70': 'rotate-70',
    '-70': '-rotate-70',
    '-315': '-rotate-315'
  }

  let dotBack = '';
    (isTabletDevice) ? dotBack='' : dotBack = 'bg-dot-pattern-sml'


  return (
    <div className="flex flex-col w-screen">
      <Header mobileLS={isMobileLS}/>
      <main>

        {/* Home page */}
        <section className={`relative ${dotBack} bg-95-v bg-no-repeat flex justify-center h-150 tablets:justify-end tablets:h-[100]`}>
          <div className="absolute z-10 top-32 tablets:-left-16 tablets:top-32 transform scale-90 tablets:scale-140 tablets:z-40">
            <img src={MyFace} alt="face" />
          </div>
          <div className="absolute z-15 top-32 ml-2 tablets:-left-16 tablets:top-32 transform scale-90 tablets:scale-140 tablets:z-[35]">
            <img src={MyFaceWht} alt="face" />
          </div>
          { isTabletDevice &&
            <div className="absolute top-38 z-30 tablets:-left-56 laptops:-left-20 w-[600px] transform scale-[0.96] tablets:scale-[0.97] laptop:scale-[0.98] desktop:top-46 desktop:scale-[1.15]">
              <img src={DotPattern} alt="panel" />
            </div>
          }
          <Hero tablet={isTabletDevice} />
        </section>
        <section>
          <div className="pl-28">
            <QuoteLine width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
          </div>
          <div className="font-Lobster text-2xl px-1 whitespace-pre-wrap flex justify-center tablets:pr-20 tablets:text-4xl laptops:text-5xl tablets:justify-end desktop:justify-center ">
            <Tagline text={"I've been coding since I was 9 years old.\nI've still got so much to learn"}/>
          </div>
        </section>

        {/* About page */}
        <section className={`relative ${dotBack} bg-85-v bg-no-repeat flex justify-center h-[54rem]`}>
          <div className="absolute z-20">
            <About/>
          </div>
          <div className="absolute z-15 top-100 transform scale-90 ">
            <img src={MyFaceGreyThought} alt="face" />
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center">
            <QuoteLine className="-left-28" width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
            <div className="font-Lobster text-2xl px-1 whitespace-pre-wrap flex justify-center">
              <Tagline text={'"I truly believe in providing the end user with a feeling of enrichment."'}/>
            </div>
          </div>
        </section>

        {/* Project page */}

        {/* Hero Project */}
        <section  id="projects" className={`relative ${dotBack} bg-bottom bg-no-repeat mt-12 flex justify-center pb-16 -mb-16`}>
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
        
        <div className="flex flex-row content-start">
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
        <div  id="exp" className="-mt-16">  
          <Experience/>
        </div>
      </main>
      <div className="bg-primaryColLite sticky bottom-0 z-50 bg-opacity-90 flex justify-center">
        <BottomNav/>
      </div>    
      
    </div>  
  )
}

export default App
