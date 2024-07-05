"use client"
import React, { useEffect, useState } from 'react';

function Hero() {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlinking(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-screen overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
      }}
    >
        <div className="absolute w-0.5 bg-gray-600 z-50 h-full" style={{ left: '12%'}}></div>
        <div className="absolute w-0.5 bg-gray-700 z-50" style={{ height: '92%', right: '30%'}}></div>
        <div className="absolute w-0.5 bg-gray-700 z-50 h-full" style={{ right: '14%'}}></div>
        <div className="h-full translate-y-48"
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(212,83,83,1) -80%, rgba(0,12,15,1) 100%)'
            }}
        >
        </div>
        <div className="absolute inset-16 z-50" 
             style={{
                backgroundImage: `linear-gradient(90deg, rgba(234,88,88,0.65) 35%, rgba(18,53,62,1) 110%),
                                  url('style3.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'left top 10%',
                margin: '2%'
            }}
        >
            <p className={`sm:text-4xl inset-0 z-10 font-bold relative bg-clip-text text-transparent py-2 px-20 ${isBlinking ? 'blink' : 'stable'}`}
               style={{
                backgroundImage:'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(2,163,200,1) 40%)'
               }}
            >
              [ C H A R A N ' S ]
            </p>
        </div>
        {/* bg-gradient-to-b from-neutral-200 to-neutral-300 */}
    </div>
  );
}

export default Hero;