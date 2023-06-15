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
        <div className="h-10 border border-black
            mx-4
        ">
            

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