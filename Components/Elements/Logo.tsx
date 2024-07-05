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
    <div className="flex justify-between">
        <div className={`text-3xl inset-0 z-10 font-bold relative bg-clip-text py-2 px-24
            bg-gradient-to-b from-neutral-100 to-neutral-200 ${showText ? (isBlinking ? 'blink' : 'stable') : 'fade-in'} `}>
            [ C H A R A N' S ]
        </div>
    </div>
  )
}

export default Logo