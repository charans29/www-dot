import React from 'react'
import { Spotlight } from './UI/Spotlight'

function Contact() {
  return (
    <div className="h-screen w-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />Spotlight
      <div className="absolute top-0 left-1/2 transform -translate-x-7/2 w-0.5 h-full bg-gray-600"></div>
    </div>
  )
}

export default Contact