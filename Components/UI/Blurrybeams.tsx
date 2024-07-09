import { cn } from '@/utils/cn';
import React from 'react'

interface prop{
  className?: string;
}

function Blurrybeams({ className }: prop) {
  return (
    <div className={cn('flex flex-col justify-between h-full py-12', className)}>
        <div className="h-3 w-screen max-w-xl bg-white/20 blur-sm transform translate-x-[150px] translate-y-5"/>
        <div className='h-2 w-screen max-w-sm bg-white/20 blur-sm transform translate-x-[570px] -translate-y-7'/>
        <div className='h-2 w-screen max-w-xs bg-white/20 blur-sm transform translate-x-[180px]'/>
        <div className="h-3 w-screen max-w-5xl bg-white/20 blur-sm transform translate-x-[100px] -translate-y-20" style={{ width: 'calc(100% --400px)' }}/>
     </div>
  )
}

export default Blurrybeams