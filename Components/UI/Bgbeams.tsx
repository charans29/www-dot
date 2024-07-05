import React from 'react'

function Bgbeams() {
  return (
    <div>
        <div className="absolute w-0.5 bg-gray-600 z-50 h-full" style={{ left: '12%'}}></div>
        <div className="absolute w-0.5 bg-gray-700 z-50" style={{ height: '92%', right: '30%'}}></div>
        <div className="absolute w-0.5 bg-gray-700 z-50 h-full" style={{ right: '14%'}}></div>
    </div>
  )
}

export default Bgbeams