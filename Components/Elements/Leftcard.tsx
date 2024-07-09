import { cn } from '@/utils/cn';
import Logo from './Logo';

interface prop{
    className?: string;
  }

function Leftcard({ className }: prop) {

    const items = ["Blockchain", "AI", "SDLC", "Cloud", "DevOps", "Maths"];

  return (
    <div className={cn("border border-none bg-none flex flex-col justify-between py-3", className)}>
        <div>
            <Logo/>
        </div>
        <div className="flex flex-col justify-between transform -translate-y-16">
            <span className="text-white font-extrabold text-sm ml-1 font-sans scale-y-90">
                SOFTWARE ENGINEER
            </span> 
            <div className="h-0.5 w-14 ml-2 bg-white"/>
            <span className="text-white font-extrabold text-4xl ml-0.5 py-5 font-sans transform origin-left scale-75 
            sm:scale-110 md:scale-125 lg:scale-130 xl:scale-y-95 xl:scale-x-150">
                CREATIVE
            </span> 
            <div className='border w-36 text-center font-sans font-bold ml-1 relative'>
                <p className="font-sans scale-y-75">
                    WEB 3.0
                </p>
                <div className='absolute left-1/2 transform translate-x-1/2 -translate-y-1/2 bottom-2 w-28 h-1 bg-white/25'/>
            </div>
        </div>
        <div className="flex space-x-1 text-white py-8">
            {items.map((item, index) => (
                <p key={index} className="text-md scale-y-75 scale-x-75 font-medium font-sans">
                {item}
                </p>
            ))}
        </div>
    </div>
  )
}

export default Leftcard