import React from 'react'
import Work from './Work'
import Tech from './Tech'
import MyFaceGreyThought from '../assets/images/myface_grey_thought.svg'
import Tagline from './Tagline'
import QuoteLine from './QuoteLine'




const Experience = ({isTabletDevice, DotPattern, lineWidth, lineHeight, lineRotation}) => {

    let skewStyle = '';
    (isTabletDevice) ? skewStyle='skew-hero' : skewStyle = ''

    return (
        <>
            <div id="exp" className="flex relative -mt-16 tablets:mt-12 tablets:justify-end">
                { isTabletDevice &&
                    <div className="absolute top-38 z-30 tablets:-left-56 laptops:left-[-48vw] w-[600px] transform origin-top-left laptop:scale-[0.98] desktop:top-40 desktop:scale-[2.11]">
                        <img src={DotPattern} alt="panel" />
                    </div>
                }
                <div className={`bg-black p-7 w-screen flex flex-col tablets:w-3/4 tablets:pl-[10vw] tablets:mt-40 tablets:justify-end ${skewStyle} z-30`}>
                    <div className="tablets:w-[90%] tablets:flex tablets:justify-end tablets:flex-col tablets:self-end">
                        <p className="font-RacingSansOne text-4xl tablets:text-6xl text-primaryColLite tablets:pb-[1.3rem]">What I've Experienced</p>
                        <div className="flex flex-col tablets:flex-row tablets:items-end">
                            <br/>
                            <div className="tablets:w-2/5">
                                <Work />
                            </div>
                            <div className="tablets:w-3/5 tablets:ml-4">
                                <Tech />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { isTabletDevice &&
                <div className="relative">
                    <div className="absolute transform mirror origin-top-right top-[-32rem] right-[35vw] z-15">
                        <img className="filter-black" src={MyFaceGreyThought} alt="panel" />
                    </div>
                    <div className="absolute transform mirror origin-top-right top-[-32rem] right-[35.2vw] z-10">
                        <img src={MyFaceGreyThought} alt="panel" />
                    </div>
                    <section>
                        <div className="flex flex-col p-1 tablets:flex-row-reverse items-center tablets:w-2/3 tablets:pl-32">
                            <QuoteLine className="-left-28" width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
                            <div className="font-Lobster text-center text-2xl px-1 flex justify-center tablets:text-5xl mt-44">
                                <Tagline text={'"Don\'t worry. I\'ve got more to learn"'}/>
                            </div>
                        </div>
                    </section> 
                </div>
            }
        </>
    )
}

export default Experience
