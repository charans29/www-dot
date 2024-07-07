import React, { ReactNode } from 'react'
import Logo from './Logo'
import { cn } from '@/utils/cn';

interface CardProps {
    children: ReactNode;
    className?: string;
}

function Leftcard({ children, className }:CardProps) {
  return (
    <div className={cn("border border-none max-w-md bg-none h-full flex flex-col justify-between mx-24 p-3", className)}>
        <div>
            <Logo/>
        </div>
        <div className="flex flex-col justify-between -mt-12">
            <span className="text-white font-extrabold text-sm ml-1 font-sans scale-y-90">SOFTWARE ENGINEER</span> 
            <div className="h-0.5 w-14 ml-2 bg-white"/>
            <span className="text-white font-extrabold text-4xl py-5 ml-0.5 font-sans transform origin-left scale-75 sm:scale-110 md:scale-125 lg:scale-130 xl:scale-y-95 xl:scale-x-150">CREATIVE</span> 
            <div className='border w-36 text-center font-sans font-bold ml-1 relative'>
                <p className="font-sans scale-y-75">
                    WEB 3.0
                </p>
                <div className='absolute left-1/2 transform translate-x-1/2 -translate-y-1/2 bottom-2 w-28 h-1 bg-white/25'/>
            </div>
        </div>
        <div className="flex space-x-1 py-8 text-white">
            <p className="text-md scale-y-75 scale-x-75 font-medium font-sans">Crypto</p>
            <p className="text-md scale-y-75 scale-x-75 font-medium font-sans">Wallet</p>
            <p className="text-md scale-y-75 scale-x-75 font-medium font-sans">DeFi</p>
            <p className="text-md scale-y-75 scale-x-75 font-medium font-sans">NFT & xNFT's</p>
            <p className="text-md scale-y-75 scale-x-75 font-medium font-sans">Blockchain</p>
        </div>
        {children}
    </div>
  )
}

export default Leftcard