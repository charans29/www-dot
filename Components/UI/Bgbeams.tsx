import React from 'react'

function Bgbeams() {
  return (
    <div>
        <div className="absolute border-l-2 border-gray-500 z-50 h-full" style={{ left: '10%', borderLeftWidth: '0.5px'}}></div>
        <div className="absolute border-l-2 border-gray-600 z-50 h-full" style={{ height: '97%', right: '25%', borderLeftWidth: '0.5px' }}></div>
        <div className="absolute border-l-2 border-gray-600 z-50 h-full" style={{ right: '10%', borderLeftWidth: '0.75px' }}></div>
    </div>
  )
}

export default Bgbeams