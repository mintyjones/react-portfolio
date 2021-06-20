import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import Face from './components/Face'
import BlackPanel from './assets/images/blackpanel.svg'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="container mx-auto h-full flex max-w-screen-lg bg-opacity-40 justify-center items-center">
      <div className="m-auto">
        <Header />
        <Hero />
        <Face />
        {/* <img src={BlackPanel} alt="panel" /> */}
      </div>    
    </div>
  )
}

export default App
