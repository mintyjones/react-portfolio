import React from 'react'
import MyFaceGreyThought from '../assets/images/myface_grey_thought.svg'
import Tagline from './Tagline'
import QuoteLine from './QuoteLine'



const About = ({tablet, DotPattern, dotBack, lineWidth, lineHeight, lineRotation}) => {

    let skewStyle = '';
    (tablet) ? skewStyle='skew-about' : skewStyle = ''

    return (
        <>
            <section className={`relative ${dotBack} bg-85-v bg-no-repeat flex justify-center h-[54rem] tablets:h-[36rem] tablets:justify-start tablets:mt-44`}>
                <div className="absolute z-20">
                    <div  id="about" className={`bg-black mt-12 p-7 w-screen tablets:py-8 tablets:pl-12 tablets:pr-60 tablets:flex tablets:items-center tablets:justify-start tablets:w-max-[50vw] ${skewStyle}`}>
                        <div className="flex flex-col tablets:items-start tablets:text-xl tablets:w-2/3">
                            <p className="font-RacingSansOne text-4xl tablets:text-5xl text-primaryColLite">who..why..& wot?</p>
                            <br/>
                            <div className="font-PoiretOne text-l text-white">
                                <p>Gordon Ian Campbell...........................Scotsman from a tiny town.</p>
                                <br/>
                                <p>I love creating things, Pictures, words, sounds. Anything, really.</p>
                                <br/>
                                <p>I’ve earned my keep as a coder and designer since the year 2000 initially starting as a Flash Animator and then learning Actionscript 3.0.</p>
                                <br/>
                                <p>I went on to attain my Adv, Dip. in Graphic Design and Multimedia, then my Dip in I.T. </p>
                                <br/>
                                <p>I absolutely love code and everything it encompasses.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute z-10 top-100 tablets:top-40 tablets:right-44 tablets:z-40 transform scale-90 tablets:scale-[1.7] ">
                    <img className="filter-black" src={MyFaceGreyThought} alt="face" />
                </div>
                <div className="absolute z-10 top-100 tablets:top-40 tablets:right-[11.2rem] tablets:z-40 transform scale-90 tablets:scale-[1.7] ">
                    <img src={MyFaceGreyThought} alt="face" />
                </div>
                { tablet &&
                    <div className="absolute top-38 z-30 tablets:-right-56 tablets:top-12 laptops:left-[60vw] w-[600px] transform origin-top-left scale-[0.96] tablets:scale-[2.025] ">
                        <img src={DotPattern} alt="panel" />
                    </div>
                }
            </section>
            
            <section>
                <div className="flex flex-col p-1 tablets:flex-row-reverse items-start tablets:w-2/3 tablets:pl-32">
                    <div className="pl-28">
                        <QuoteLine className="-left-28" width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
                    </div>
                    <div className="font-Lobster text-center text-2xl px-1 whitespace-pre-wrap flex justify-center tablets:text-5xl">
                        <Tagline text={'"I truly believe in providing the end user with a feeling of enrichment."'}/>
                    </div>
                </div>
            </section>
      </>
    )
}

export default About
