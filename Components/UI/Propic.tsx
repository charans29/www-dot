import React, { ReactNode } from 'react'

interface PropicProps {
    children: ReactNode;
  }

function Propic({ children }:PropicProps) {
  return (
    <div className="absolute inset-16 z-50" 
        style={{
        backgroundImage: `linear-gradient(90deg, rgba(234,88,88,0.65) 20%, rgba(18,53,62,1) 110%),
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