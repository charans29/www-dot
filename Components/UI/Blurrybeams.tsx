import { cn } from '@/utils/cn';
import React from 'react'

interface BeamProps {
    className?: string;
  }

function Blurrybeams({ className }:BeamProps) {
  return (
    <div className={cn("border-1 blur-sm", className)}/>
  )
}

export default Blurrybeams