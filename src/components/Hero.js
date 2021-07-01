import React from 'react'



const Hero = ({tablet}) => {

    let skewStyle = '';
    (tablet) ? skewStyle='skew-hero' : skewStyle = ''

    return (
        <div className={`bg-black py-8 absolute z-20 w-screen flex flex-col tablets:w-3/4 tablets:pl-[10vw] tablets:pt-24 tablets:pb-28 tablets:mt-40 tablets:h-[380px] tablets:justify-end ${skewStyle}`}>
            <span className="font-PoiretOne text-3xl self-center tablets:text-[2.35rem] tablets:self-end desktop:self-center tablets:pr-8 laptops:text-5xl desktop:text-[5vw] text-white tablets:mb-10">Nothing is impossible...</span>
            <span className="font-RacingSansOne text-2xl self-center tablets:text-[1.95rem] tablets:self-end  desktop:self-center tablets:pr-8 laptops:text-[2.5rem] desktop:text-[4vw] text-primaryColLite pt-4">&#123; ANYTHING IS POSSIBLE &#125;</span>
        </div>
    )
}

export default Hero
