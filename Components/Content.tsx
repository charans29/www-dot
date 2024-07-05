import React from 'react'

function Content() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center"
    style={{
      backgroundImage: 'linear-gradient(360deg, rgba(212,83,83,1) -80%, rgba(0,3,5,1) 15%)'
    }}
    >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent 
                      bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 dark:bg-grid-small-white/[0.35]">
            Backgrounds
        </p>
    </div>
  );
}

export default Content