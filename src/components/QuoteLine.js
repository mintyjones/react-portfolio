import React from 'react'
import classnames from 'classnames'

const QuoteLine = ({width, height, rotation}) => {
      
    console.log(width)

    return (
        // <div className={classnames(tw_width, tw_height, "m-h-1", "transform", tw_rotate, "bg-black", "dark:bg-white", "tablets:bg-red-600")}>&nbsp;</div>
        <div className={`${width} ${height} m-h-1 transform ${rotation} bg-black dark:bg-white`}>&nbsp;</div>
    )
}

export default QuoteLine
