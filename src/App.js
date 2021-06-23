import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import Face from './components/Face'
import DotPattern from './assets/images/dot_pattern.svg'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import QuoteLine from './components/QuoteLine'

const App = () => {

  //screen breakpoints

  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
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

  console.log(isLaptop)

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
    '-70': '-rotate-70'
  }

  const renderHomeMob = () => {
    return (
      <>
        <Hero />
        <div className="app-dot bg-dot-pattern-sml bg-no-repeat flex flex-col bg-fixed justify-center items-center h-auto pt-4">
          <Face />
          <div className="relative mt-8">
            <div className="absolute bottom-14 left-16">
              <QuoteLine width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
            </div>
            <Tagline text={"I've been coding since I was 9 years old.\nI've still got so much to learn"}/>
          </div>
        </div>
      </>
    )
  }

  const renderHomeBigscreen = () => {
    return (
        <div className="relative pl-64 mt-28">
          <Hero tablet={isTabletDevice} />
          <div className="absolute top-0 tablets:-left-56 laptops:-left-20 w-[600px]">
            <img src={DotPattern} alt="panel" />
          </div>
          <div className="absolute -left-32 top-10 transform scale-150">
            <Face/>
          </div>
          <div className="relative ml-20 mt-40 extraLG:ml-64">
            <div className="absolute left-0 -top-32 extraLG:-left-28">
              <QuoteLine width={lineWidth['sml']} height={lineHeight['big']} rotation={lineRotation['-70']}/>
            </div>
            <Tagline text={"I've been coding since I was 9 years old.\nI've still got so much to learn"}/>
          </div>
        </div>
    )
  }

  return (
    <div className="mx-auto h-full flex max-w-screen-lg bg-opacity-40 justify-center items-center">
      <div className="m-auto w-screen">
        <Header laptop={isLaptop} />
        {(isMobile) 
          ? renderHomeMob() // console.log("Tablet")
          : renderHomeBigscreen() //console.log("Mobile")
        } 
      </div>    
    </div>
  )
}

export default App
