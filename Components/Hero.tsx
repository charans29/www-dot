"use client"
import Glassygradient from './UI/Glassygradient';
import Propic from './UI/Propic';
import Blurrybeams from './UI/Blurrybeams';
import Leftcard from './Elements/Leftcard';
import Rightcard from './Elements/Rightcard';

function Hero() {
  
  return (
    <Glassygradient>
      <Propic className='flex justify-between px-28'>
        <Leftcard className="relative z-20" />
        <Rightcard className="relative z-20" />
        <Blurrybeams className='absolute z-50'/>
      </Propic>
    </Glassygradient>
  );
}

export default Hero;