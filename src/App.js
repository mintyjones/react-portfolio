import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import Face from './components/Face'
import DotPattern from './assets/images/dot_pattern.svg'
import MyFace from './assets/images/myface.svg'
import Hero from './components/Hero'
import About from './components/About'
import Tagline from './components/Tagline'
import QuoteLine from './components/QuoteLine'

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
    '-70': '-rotate-70'
  }

  let dotBack = '';
    (isTabletDevice) ? dotBack='' : dotBack = 'bg-dot-pattern-sml'


  return (
    <div className="flex flex-col w-screen">
      <Header mobileLS={isMobileLS}/>
      <main>
        <section className={`relative ${dotBack} app-dot bg-no-repeat bg-fixed flex justify-center h-150 tablets:justify-end tablets:h-[100]`}>
          <div className="absolute z-10 top-32 tablets:-left-16 tablets:top-32 transform scale-90 tablets:scale-140 tablets:z-40">
            <img src={MyFace} alt="face" />
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
        <div className="absolute z-20">
          <About/>
        </div>
      </main>
    </div>  
  )
}

export default App
