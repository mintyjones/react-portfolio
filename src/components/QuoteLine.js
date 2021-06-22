import React from 'react'
import classnames from 'classnames'

const QuoteLine = ({width, height, rotate}) => {

    const buildClasses = () => {
        let tw_width = `w-${width}`
        let tw_height = `h-${height}`
        let tw_rotate = `rotate-${rotate}`
        
        return (
            <div className={classnames(tw_width, tw_height, "m-h-1", "transform", tw_rotate, "bg-black", "tablets:bg-red-600")}></div>
        )
    }

    return (
        buildClasses()
    )
}

export default QuoteLine