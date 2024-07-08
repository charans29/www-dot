import { cn } from '@/utils/cn';
import React, { useEffect, useState } from 'react';
import { MenuToggle } from '../Toggle';
import { useAnimate, stagger } from "framer-motion";

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
      const menuAnimations: any = isOpen
        ? [
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.05), at: "-0.1" }
            ]
          ]
        : [
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.05, { from: "last" }), at: "<" }
            ],
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
          ];
  
      animate([
        [
          "path.top",
          { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" }
        ],
        ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" }
        ],
        ...menuAnimations
      ]);
    }, [isOpen]);
  
    return scope;
  }


function Rightcard() {
    const items = ["Blockchain", "AI", "SDLC", "Maths", "Cloud", "DevOps"];
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);

    return (
      <div className="border border-none bg-none flex flex-col justify-between py-3 mx-5" ref={scope}>
          <div className='flex flex-row-reverse py-5 px-3.5'>
            <MenuToggle toggle={() => setIsOpen(!isOpen)}/>
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex flex-col space-y-3 items-center">
                <div className='flex justify-around items-center border-2 border-red-500/90 h-8 w-8 rounded-full'
                style={{ clipPath: 'polygon(100% 100%, 50% 50%, 100% 100%, 50% 0, 0 0, 0 50%, 0 100%)' }}>
                    <div className='text-red-500/90 text-2xl text-center'>
                        •
                    </div>
                </div>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className='text-white/70 text-2xl'>•</div>
                ))}
                <div className="border-l-2 h-24 w-0.5 border-white/60"/>
                <span>
                    <span className="text-white font-bold font-sans text-xl">
                        09
                    </span>
                    <span className='text-sm text-white/45'>
                        /29
                    </span>
                </span>
            </div>
          </div>
          <div className="flex space-x-1 py-8 text-white">
              {items.map((item, index) => (
                  <p key={index} className="text-md scale-y-75 scale-x-75 font-medium font-sans">
                  {item}
                  </p>
              ))}
          </div>
      </div>
    )
  }
  

export default Rightcard