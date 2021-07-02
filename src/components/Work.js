import React from 'react'
import Windows from '../assets/images/windows_logo.svg'
import Suncorp from '../assets/images/suncorp_logo.svg'
import QldGov from '../assets/images/qldgov_logo.svg'
import Virgin from '../assets/images/virgin_logo.svg'
import Qfs from '../assets/images/qfs_logo.svg'
import Av from '../assets/images/av_logo.svg'


const Work = () => {
    return (
        <div className="rounded-[1.375rem] bg-primaryColDark text-white font-PoiretOne mb-4 text-xl p-4 tablets:mb-2">
            <h3 className="font-RacingSansOne text-3xl mb-4">Worked with...</h3>
            <div className="flex flex-wrap">
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" g src={Windows} alt="Windows" /> 
                    <p>Microsoft</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1" src={Suncorp} alt="Suncorp" /> 
                    <p>Suncorp</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1"  src={QldGov} alt="QldGov" /> 
                    <p>QLD Gov</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1"  src={Virgin} alt="Virgin" /> 
                    <p>Virgin Australia</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1"  src={Qfs} alt="Qfs" /> 
                    <p>QFRS</p>
                </div>
                <div className="flex items-center py-1 mr-1 auto-space">
                    <img className="mr-1"  src={Av} alt="Av" /> 
                    <p>Australian Vintage</p>
                </div>
            </div>
        </div>
    )
}

export default Work
