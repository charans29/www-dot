import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react'

interface PropicProps {
    children: ReactNode;
    className?: string;
  }

function Propic({ children, className }:PropicProps) {
  return (
    <div className={cn("absolute z-50 inset-2 sm:inset-3 md:inset-4 lg:inset-5 xl:inset-6 overflow-hidden", "m-2 sm:m-3 md:m-4 lg:m-5 xl:m-6 hero-front", className)}
        style={{
        backgroundImage: `linear-gradient(90deg, rgba(334,88,88,0.75) 10%, rgba(18,53,62,1) 110%),
                            url('style.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'left top 10%',
        margin: '2%'
        }}
    >
        {children}
    </div>
  )
}

export default Propic