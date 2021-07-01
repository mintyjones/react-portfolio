import React from 'react'
import Hero from './Hero'
import MyFace from '../assets/images/myface.svg'
import MyFaceWht from '../assets/images/myface_white.svg'
import Tagline from './Tagline'
import QuoteLine from './QuoteLine'

const Home = ({dotBack, DotPattern, isTabletDevice, lineWidth, lineHeight, lineRotation}) => {

    console.log(dotBack)

    return (
        <>
            <section className={`relative ${dotBack} bg-95-v bg-no-repeat flex justify-center h-150 tablets:justify-end tablets:h-[100]`}>
                <div className="absolute z-10 top-32 tablets:-left-16 tablets:top-32 transform scale-90 tablets:scale-140 tablets:z-40">
                    <img src={MyFace} alt="face" />
                </div>
                <div className="absolute z-15 top-32 ml-2 tablets:-left-16 tablets:top-32 transform scale-90 tablets:scale-140 tablets:z-[35]">
                    <img src={MyFaceWht} alt="face" />
                </div>
                { isTabletDevice &&
                    <div className="absolute top-38 z-30 tablets:-left-56 laptops:left-[-40vw] w-[600px] transform origin-top-left scale-[0.96] tablets:scale-[] laptop:scale-[0.98] desktop:top-40 desktop:scale-[1.85]">
                        <img src={DotPattern} alt="panel" />
                    </div>
                }
                <Hero tablet={isTabletDevice} />
            </section>
            <section>
                <div className="pl-28">
                    <QuoteLine width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
                </div>
                <div className="font-Lobster text-2xl px-1 text-center whitespace-pre-wrap flex justify-center tablets:pr-20 tablets:text-4xl laptops:text-5xl tablets:justify-end desktop:justify-center ">
                    <Tagline text={"I've been coding since I was 9 years old.\nI've still got so much to learn"}/>
                </div>
        </section>
      </>
    )
}

export default Home
