import React from 'react';
import {useAtom} from 'jotai';
import {atomWithObservable} from 'jotai/utils';
import { useMUD } from '../../MUDContext';

export const ItemPanel = () => {
    const {
            network: {network: { blockNumber$ }}
        } = useMUD();

    const blockNumberAtom = atomWithObservable(()=>blockNumber$)
    const [blockNumber] = useAtom(blockNumberAtom);
    //const blockNumber = 8888888
    return (
    
    <div className="bg-[#697070]
            border rounded-md border-neutral-700 
            drop-shadow-2xl
            h-screen w-1/5
            flex flex-col
            ">

        {/* top panel */}
        <div className="bg-transparent w-full h-20 flex justify-end"
        style={{backgroundImage: "url(/assets/roundinfo.png)",
        backgroundRepeat: "no-repeat", backgroundPosition: "left top",
        backgroundSize: "contain"
        }}
        >
            <div className="w-1/2 font-medival text-xl text-right px-4 pt-3
            text-[#BEBFC1] font-extrabold
            ">
                <div>BlockNumber</div>
                <div>{blockNumber}</div>
            </div>

        </div>

        {/* item equip slots */}
        {/* grid grid-cols-4 grid-rows-3 */}
        {/* border rounded border-neutral-700 
            shadow-inner shadow-neutral-700 */}
        <div className="mx-4 my-2 flex justify-center items-center
            border rounded-xl border-neutral-700 overflow-hidden
        "
        >
            <img className="w-full" src="/assets/itemequips.png" />
        </div>

        {/* status bars */}
        <div className="h-10 
            
            mx-4 p-2
        ">
            <div className='flex 
            bg-black font-protoshade 
            shadow-inner shadow-gray-600
            font-semibold rounded-sm overflow-hidden'>
                <span className="bg-[#9DBA51] w-[90%] 
                text-xs text-[#E8DEDA] h-2">
                    912/1200
                </span>
            </div>
            <div className="my-1"></div>
            <div className='flex 
            bg-black font-protoshade 
            shadow-inner shadow-gray-600
            font-semibold rounded-sm overflow-hidden'>
                <span className="bg-[#B69553] w-[90%] 
                text-xs text-[#E8DEDA] h-2"></span>
            </div>

        </div>

        {/* item drops */}
        {/* grid grid-cols-4 grid-rows-3 */}
        <div className="mx-4 my-2
            border rounded border-neutral-700 
            shadow-inner shadow-neutral-700
            
        ">
            <img className="w-full" src="/assets/itemdrops.png" />
        </div>

        {/* info panel */}
        {/* bg-[#6D271C] */}
        <div className="mx-4 my-2 grow
        bg-[#6D271C]
        border rounded border-neutral-700
        shadow-inner shadow-neutral-700
        ">

        </div>

    </div>
    
  )
}