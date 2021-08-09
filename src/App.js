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
    query: "(min-device-width: 769px)",
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

  console.log("is mobile LS: ", isMobileLS)
  console.log("is isTabletDevice: ", isTabletDevice)
  console.log("is isLaptop: ", isLaptop)
  console.log("is isDesktop: ", isDesktop)
  console.log("is isBigScreen: ", isBigScreen)

  let dotBack = '';
  (isTabletDevice) ? dotBack='' : dotBack = 'bg-dot-pattern-sml'


  return (
    <div className="flex flex-col w-screen bg-white dark:bg-primaryColDark">
      <Header mobileLS={isMobileLS}/>
      <main>
        <Home dotBack={dotBack} DotPattern={DotPattern} isTabletDevice={isTabletDevice}/>
        <About tablet={isTabletDevice} dotBack={dotBack} DotPattern={DotPattern}/>
        <Projects isTabletDevice={isTabletDevice}/>
        <Experience isTabletDevice={isTabletDevice} DotPattern={DotPattern} />
        <ContactForm/>
      </main>
      { !isMobileLS &&
        <BottomNav/>   
      }
    </div>  
  )
}

export default App
