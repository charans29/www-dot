import React from 'react'

function Content() {
  return (
    <div className='h-screen overflow-hidden'>
        <text>
            content
        </text>
        <div className='h-max translate-y-40 -translate-x-40'
             style={{
                backgroundImage: 'radial-gradient( circle 636.6px at 10% 20%,  rgba(650,80,11,1) 90%, rgba(650,80,11,1) 90% )'
             }}
        >
            <text className="text-blue-600">
                md:inset-x-[calc(theme(inset.8)+1px)]
            </text>
        </div>
    </div>
  );
}

export default Content