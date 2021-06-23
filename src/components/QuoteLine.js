import React from 'react'
import classnames from 'classnames'

const QuoteLine = ({width, height, rotation}) => {

    // const lineWidth = {
    //     'Estrutural': 'w-1',
    //     'Investimento': 'w-4'
    //   }
      
    console.log(width)

    return (
        // <div className={classnames(tw_width, tw_height, "m-h-1", "transform", tw_rotate, "bg-black", "tablets:bg-red-600")}>&nbsp;</div>
        <div className={`${width} ${height} m-h-1 transform ${rotation} bg-black tablets:bg-black`}>&nbsp;</div>
    )
}

export default QuoteLine
