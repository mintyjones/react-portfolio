import React from 'react'
import classnames from 'classnames'

const QuoteLine = ({width, height, rotate}) => {

    const buildClasses = (w,h) => {
        let tw_width = `w-${width}`
    }

    return (
        <div className={classnames(`w-${width} h-${height} transform rotate-${rotate} bg-black`)}>
            
        </div>
    )
}

export default QuoteLine
