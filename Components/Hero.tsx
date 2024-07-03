import React from 'react';
import { Spotlight } from './UI/spotlight';

function Hero() {
  return (
    <div className='h-screen overflow-hidden'
    style={{
        backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
     }}>
        <text>
            hello
        </text>
        <div className='h-full translate-y-44'
             style={{
                backgroundImage: 'linear-gradient( 55deg,  rgba(150,60,60,1) -11%, rgba(8,0,0,1) 95% )'
             }}
        >
            <text className="text-blue-600">
                md:inset-x-[calc(theme(inset.8)+1px)]
            </text>
        </div>
    </div>
  );
}

export default Hero;
