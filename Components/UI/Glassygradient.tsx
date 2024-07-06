import React, { ReactNode } from 'react';
import Bgbeams from './Bgbeams';

interface GlassygradientProps {
  children: ReactNode;
}

function Glassygradient({ children }: GlassygradientProps) {
  return (
    <div className="h-screen overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
      }}>
        <Bgbeams/>
        <div className="h-full translate-y-48"
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(212,83,83,1) -80%, rgba(0,12,15,1) 100%)'
            }}
        />
        {children}
    </div>
  );
}

export default Glassygradient;
