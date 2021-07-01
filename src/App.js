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
import ContactForm from './components/ContactForm'
import Home from './components/Home'
import Projects from './components/Projects'

const App = () => {

  //screen breakpoints

  const isMobileLS = useMediaQuery({
    query: "(orientation: landscape)",
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
        <Home dotBack={dotBack} DotPattern={DotPattern} isTabletDevice={isTabletDevice} lineWidth={lineWidth} lineHeight={lineHeight} lineRotation={lineRotation}/>
        <About dotBack={dotBack}  lineWidth={lineWidth} lineHeight={lineHeight} lineRotation={lineRotation}/>
        <Projects dotBack={dotBack} lineWidth={lineWidth} lineHeight={lineHeight} lineRotation={lineRotation}/>
        <Experience/>
        <ContactForm/>
      </main>
      { !isMobileLS &&
        <BottomNav/>   
      }
    </div>  
  )
}

export default App
