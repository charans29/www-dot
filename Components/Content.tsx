import React from 'react'

function Content() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center"
    style={{
      backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
    }}
    >
      <div className="md:h-5 w-screen overflow-hidden group/card relative border border-none mx-72 bg-white/40 z-10 transition duration-500">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent 
                      bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 dark:bg-grid-small-white/[0.35]">
            Backgrounds
        </p>
      </div>
    </div>
  );
}

export default Content