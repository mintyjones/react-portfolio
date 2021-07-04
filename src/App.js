import React from 'react'

import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import DotPattern from './assets/images/dot_pattern.svg'
import About from './components/About'
import Experience from './components/Experience'
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
    <div className="flex flex-col w-screen bg-white dark:bg-black">
      <Header mobileLS={isMobileLS}/>
      <main>
        <Home dotBack={dotBack} DotPattern={DotPattern} isTabletDevice={isTabletDevice} lineWidth={lineWidth} lineHeight={lineHeight} lineRotation={lineRotation}/>
        <About tablet={isTabletDevice} dotBack={dotBack} DotPattern={DotPattern} lineWidth={lineWidth} lineHeight={lineHeight} lineRotation={lineRotation}/>
        <Projects isTabletDevice={isTabletDevice} lineWidth={lineWidth} lineHeight={lineHeight} lineRotation={lineRotation}/>
        <Experience isTabletDevice={isTabletDevice} DotPattern={DotPattern}  lineWidth={lineWidth} lineHeight={lineHeight} lineRotation={lineRotation}/>
        <ContactForm/>
      </main>
      { !isMobileLS &&
        <BottomNav/>   
      }
    </div>  
  )
}

export default App
