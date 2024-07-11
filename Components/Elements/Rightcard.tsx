import { cn } from '@/utils/cn';
import Items from './Items';

interface prop{
    className?: string;
  }

function Rightcard({ className }:prop) {
    const items = ["Blockchain", "AI", "SDLC", "Maths", "Cloud", "DevOps"];

    return (
      <div className={cn("border border-none bg-none flex flex-col justify-between py-3", className)}>
          <div className='flex flex-row-reverse py-5 px-3.5'>
            <Items/>
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