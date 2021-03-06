import React from 'react'

const Face = ({face}) => {
    return (
        <div className="absolute z-15 top-32 left-12 tablets:-left-12 tablets:top-32 transform scale-90 tablets:scale-140 tablets:z-40">
            <img src={face} alt="face" />
        </div>
    )
}

export default Face
