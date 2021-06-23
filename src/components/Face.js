import React from 'react'
import FaceMain from '../assets/images/myface.svg'
import FaceGrey from '../assets/images/myface_grey.svg'

const Face = ({face}) => {
    return (
        <div className=" flex content-center justify-center m-w-7/10">
            {(face=="grey") ? <img src={FaceMain} alt="Gordon's Face"/> : <img src={FaceGrey} alt="Gordon's Face"/>}
        </div>
    )
}

export default Face
