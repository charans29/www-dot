import React from 'react';

function Hero() {
  return (
    <div
      className="h-screen overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
      }}
    >
        <div className="absolute transform -translate-x-1/2 w-0.5 bg-gray-600 z-50 h-full" style={{ left: '12%'}}></div>
        <div className="absolute w-0.5 bg-gray-700 z-50" style={{ height: '92%', right: '30%'}}></div>
        <div className="absolute w-0.5 bg-gray-700 z-50 h-full" style={{ right: '14%'}}></div>
        <div className="h-full translate-y-48"
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(212,83,83,1) -80%, rgba(0,12,15,1) 100%)'
            }}
        >
        </div>
        <div className="absolute inset-16 items-center z-50 pointer-events-none" 
             style={{
                backgroundImage: 'linear-gradient(90deg, rgba(234,88,88,1) -30%, rgba(18,53,62,1) 110%)',
                margin: '2%'
            }}
        >
            <p className="sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 px-20">
                CHARAN'S
            </p>
        </div>
    </div>
  );
}

export default Hero;
