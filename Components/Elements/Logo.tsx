import React, { useEffect, useState } from 'react'

function Logo() {
    const [isBlinking, setIsBlinking] = useState(true);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
        setShowText(true);
        const blinkTimer = setTimeout(() => {
            setIsBlinking(false);
        }, 300); 
        
        return () => clearTimeout(blinkTimer);
        }, 1000); 

        return () => clearTimeout(delayTimer);
    }, []);

  return (
    <div className={`flex space-x-2 text-3xl inset-0 font-sans scale-y-90 z-50 font-bold relative bg-clip-text py-2 
        bg-gradient-to-b from-neutral-100 to-neutral-200 ${showText ? (isBlinking ? 'blink' : 'stable') : 'fade-in'}`}>
            <div>[</div>
            <div>C</div>
            <div className=" flex space-x-2">
                <div>H</div>
                <div>A</div>
                <div>R</div>
                <div>A</div>
            <div>N'</div>
            </div>
            <div>S</div>
            <div>]</div>
    </div>
        
  )
}

export default Logo