import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import Face from './components/Face'
import BlackPanel from './assets/images/blackpanel.svg'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import QuoteLine from './components/QuoteLine'

const App = () => {

  //screen breakpoints

  const isMobileLSDevice = useMediaQuery({
    query: "(min-device-width: 576px)",
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

  return (
    <div className="container mx-auto h-full flex max-w-screen-lg bg-opacity-40 justify-center items-center">
      <div className="m-auto">
        <Header />
        <Hero />
        <div className="app-dot bg-dot-pattern-sml bg-no-repeat flex flex-col bg-fixed justify-center items-center h-auto pt-4">
          <Face />
          <div className="relative mt-8">
            <div className="absolute bottom-14 left-16">
              <QuoteLine width="1" height="16" rotate="45" />
            </div>
            <Tagline text={"I've been coding since I was 9 years old.\nI've still got so much to learn"}/>
          </div>
        </div>
        {/* <img src={BlackPanel} alt="panel" /> */}
      </div>    
    </div>
  )
}

export default App
