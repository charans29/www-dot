import React from 'react'
import Example from './Elements/Items';
import Items from './Elements/Items';

function Content() {
  return (
    <div className="h-screen w-screen relative flex justify-between overflow-hidden p-10"
    style={{
      backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
    }}
    >A B C D
    <div className="md:h-5 w-screen overflow-hidden group/card relative border border-none mx-72 bg-white/40 z-10 transition duration-500"/>
    <Items/>
    </div>
  );
}

export default Content