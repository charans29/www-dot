import React from 'react'

function Blurrybeams() {
  return (
    <div className='flex flex-col justify-between absolute h-screen py-12'>
        <div className="h-3 w-screen sm:ml-12 md:ml-16 lg:ml-36 xl:ml-52 sm:max-w-sm md:max-w-md 
        lg:max-w-lg xl:max-w-xl mt-2 bg-white/20 border-1 blur-sm"/>
        <div className='h-2 w-screen max-w-xs bg-white/20 blur-sm transform translate-x-[570px] translate-y-16'/>
        <div className='h-2 w-screen max-w-xs bg-white/20 blur-sm transform translate-x-[180px] translate-y-48'/>
        <div className="h-3 w-screen sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-36
        sm:my-14 md:my-20 lg:my-28 xl:my-56 bg-white/20 border-1 blur-sm"/>
     </div>
  )
}

export default Blurrybeams