"use client"
import Glassygradient from './UI/Glassygradient';
import Propic from './UI/Propic';
import Logo from './Elements/Logo';
import Blurrybeams from './UI/Blurrybeams';

function Hero() {
  
  return (
    <Glassygradient>
      <Propic className="flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <Logo/> 
          <Blurrybeams className="h-3 w-full max-w-xl ml-4 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-72 mt-2 bg-white/50"/>
        </div>
        <div className="flex flex-col justify-between">
          <Blurrybeams className="h-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto 
          sm:my-14 md:my-20 lg:my-28 xl:my-32 border-none bg-white/45"/>
          <div className="md:h-4 w-full max-w-screen-lg mx-auto my-3 border-none bg-white/2 z-10"/>
        </div>
      </Propic>
    </Glassygradient>
  );
}

export default Hero;