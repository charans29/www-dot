"use client"
import Glassygradient from './UI/Glassygradient';
import Propic from './UI/Propic';
import Logo from './Elements/Logo';

function Hero() {
  
  return (
    <Glassygradient>
        <Propic>
          <Logo/>
        </Propic>
    </Glassygradient>
  );
}

export default Hero;