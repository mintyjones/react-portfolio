import React from 'react'



const About = ({tablet}) => {

    let skewStyle = '';
    (tablet) ? skewStyle='skew-test' : skewStyle = ''

    return (
        <div className={`bg-black mt-12 p-7 w-screen tablets:h-[336px] tablets:flex tablets:items-center tablets:justify-end extraLG:justify-center tablets:w-auto ${skewStyle}`}>
            <div className="flex flex-col tablets:items-start">
                <p className="font-RacingSansOne text-4xl tablets:text-[1.95rem] laptops:text-[2.5rem] desktop:text-6xl text-primaryColLite">who..why..& wot?</p>
                <br/>
                <div className="font-PoiretOne text-l tablets:text-[2.35rem] laptops:text-5xl desktop:text-[4.6rem] text-white">
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
    )
}

export default About
