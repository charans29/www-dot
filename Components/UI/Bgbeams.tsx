import React from 'react'

function Bgbeams() {
  return (
    <div>
        <div className="absolute border-l-2 border-gray-500 z-50 h-full" style={{ left: '12%', borderLeftWidth: '0.5px'}}></div>
        <div className="absolute border-l-2 border-gray-600 z-50 h-full" style={{ height: '92%', right: '30%', borderLeftWidth: '0.5px' }}></div>
        <div className="absolute border-l-2 border-gray-600 z-50 h-full" style={{ right: '14%', borderLeftWidth: '0.75px' }}></div>
    </div>
  )
}

export default Bgbeams