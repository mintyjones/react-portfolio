import React from 'react'
import MyFaceGreyThought from '../assets/images/myface_grey_thought.svg'
import Tagline from './Tagline'
import QuoteLine from './QuoteLine'



const About = ({tablet, dotBack, lineWidth, lineHeight, lineRotation}) => {

    let skewStyle = '';
    (tablet) ? skewStyle='skew-test' : skewStyle = ''

    return (
        <>
            <section className={`relative ${dotBack} bg-85-v bg-no-repeat flex justify-center h-[54rem]`}>
                <div className="absolute z-20">
                    <div  id="about" className={`bg-black mt-12 p-7 w-screen tablets:h-[336px] tablets:flex tablets:items-center tablets:justify-end extraLG:justify-center tablets:w-auto ${skewStyle}`}>
                        <div className="flex flex-col tablets:items-start">
                            <p className="font-RacingSansOne text-4xl text-primaryColLite">who..why..& wot?</p>
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
                <div className="absolute z-15 top-100 transform scale-90 ">
                    <img src={MyFaceGreyThought} alt="face" />
                </div>
            </section>
            <section>
            <div className="flex flex-col items-center">
            <QuoteLine className="-left-28" width={lineWidth['sml']} height={lineHeight['sml']} rotation={lineRotation['45']}/>
            <div className="font-Lobster text-2xl px-1 whitespace-pre-wrap flex justify-center">
                <Tagline text={'"I truly believe in providing the end user with a feeling of enrichment."'}/>
            </div>
            </div>
        </section>
      </>
    )
}

export default About
