import React from 'react'



const Hero = ({tablet}) => {

    console.log("Is it a tablet", tablet)

    let skewStyle = '';
    (tablet) ? skewStyle='skew-test' : skewStyle = ''

    return (
        <div className={`bg-black p-7 w-screen tablets:h-[336px] tablets:flex tablets:items-center tablets:justify-end extraLG:justify-center tablets:w-auto ${skewStyle}`}>
            <div className="flex flex-col items-center tablets:items-start">
                <p className="font-PoiretOne text-3xl tablets:text-[2.35rem] laptops:text-5xl desktop:text-[4.6rem] text-white">Nothing is impossible...</p>
                <p className="font-RacingSansOne text-2xl tablets:text-[1.95rem] laptops:text-[2.5rem] desktop:text-6xl text-primaryColLite pt-4">&#123; ANYTHING IS POSSIBLE &#125;</p>
            </div>
        </div>
    )
}

export default Hero
