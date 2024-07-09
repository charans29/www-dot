"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React, { useEffect, useState } from 'react';
import { MenuToggle } from '../Toggle';
import { useAnimate, stagger } from "framer-motion";
import {
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
} from '@heroicons/react/16/solid'
import { cn } from '@/utils/cn';

interface prop{
  className?: string;
}

function useMenuAnimation(isOpen:boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations:any = isOpen
      ? [
          ['nav', { transform: 'translateX(0%)' }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }],
          ['li', { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' }, { delay: stagger(0.05), at: '-0.1' }],
        ]
      : [
          ['li', { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' }, { delay: stagger(0.05, { from: 'last' }), at: '<' }],
          ['nav', { transform: 'translateX(-100%)' }, { at: '-0.1' }],
        ];

    animate([
      ['path.top', { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' }, { at: '<' }],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      ['path.bottom', { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' }, { at: '<' }],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}
  

export default function Items({ className }:prop) {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className={cn("w-5 text-right z-50", className)}>
      <Menu>
        <MenuButton as="div"ref={scope}>
          <MenuToggle toggle={toggleMenu} />
        </MenuButton>
        <MenuItems transition anchor="bottom end"
            className="
            w-36 
            origin-top-right
            rounded-xl 
            border
            border-white/5
            bg-white/5 
            p-1
            text-sm/6
            text-white
            transition
            duration-100
            ease-out
            [--anchor-gap:var(--spacing-1)]
            focus:outline-none
            data-[closed]:scale-95
            data-[closed]:opacity-0
            z-50
            "
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            onClick={toggleMenu}
            >
                 <DocumentTextIcon className="h-4 w-4 fill-current text-white/60" />
                 <span className='text-white font-thin text-sm ml-1 font-sans scale-y-90'>
                     Resume
                 </span>
                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>          
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            onClick={toggleMenu}
            >
                 <DocumentMagnifyingGlassIcon className="h-4 w-4 fill-current text-white/60" />
                 <span className='text-white font-thin text-sm ml-1 font-sans scale-y-90'>
                     Research
                 </span>
                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
             </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}