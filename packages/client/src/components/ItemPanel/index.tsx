import React from 'react'

export const ItemPanel = () => {

  return (
    
    <div className="bg-[#788081]
            border-2 rounded-md border-neutral-700 
            shadow-2xl shadow-neutral-700
            drop-shadow-2xl
            h-screen w-1/5
            flex flex-col
            ">

        {/* top panel */}
        <div className="bg-transparent w-full h-20 
            
            "></div>

        {/* item equip slots */}
        <div className="mx-4 my-2 h-48
            border rounded border-neutral-700 
            
            shadow-inner shadow-neutral-700
            grid grid-cols-4 grid-rows-3
        ">
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
        <div className="mx-4 my-2 h-48
            border rounded border-neutral-700 
            
            shadow-inner shadow-neutral-700
            grid grid-cols-4 grid-rows-3
        ">
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