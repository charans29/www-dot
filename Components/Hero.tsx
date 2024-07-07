"use client"
import Glassygradient from './UI/Glassygradient';
import Propic from './UI/Propic';
import Logo from './Elements/Logo';
import Blurrybeams from './UI/Blurrybeams';
import Leftcard from './Elements/Leftcard';

function Hero() {
  
  return (
    <Glassygradient>
      <Propic className='flex justify-between'>
        <Leftcard className="relative z-50">
          <div className='flex flex-col justify-between absolute h-screen py-14'>
            <Blurrybeams className="h-3 w-screen sm:ml-12 md:ml-16 lg:ml-36 xl:ml-56 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-2 bg-white/20"/>
            <Blurrybeams className="h-3 origin-left w-screen sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-36
            sm:my-14 md:my-20 lg:my-28 xl:my-56  bg-white/25"/>
          </div>
        </Leftcard>
        {/* <Leftcard>
          <div></div>
        </Leftcard> */}
      </Propic>
    </Glassygradient>
  );
}

export default Hero;