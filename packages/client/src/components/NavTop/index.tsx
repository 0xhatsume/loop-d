import React from 'react'

export const NavTop = () => {
    return (
        <nav className="bg-[#6A7070] 
        flex flex-row items-center 
        justify-normal 
        border-2 rounded-md border-neutral-700
        shadow-2xl shadow-neutral-700
        drop-shadow-2xl
            h-20 w-full
        ">

        {/* world status bars */}
        <div className="flex flex-col items-center justify-center
            h-full w-40 px-3 py-4 flex-none shrink-0
            border-x rounded border-zinc-600
            ">
            <div className='flex w-full
                bg-black font-protoshade 
                border border-zinc-600
                shadow-inner shadow-gray-600
                font-semibold rounded-sm overflow-hidden'>
                    <span className="bg-[#9DBA51] w-[90%] 
                    text-xs text-[#E8DEDA] h-2">
                    </span>
                </div>

                <div className="my-1"></div>

                <div className='flex w-full
                bg-black font-protoshade 
                border border-zinc-600
                shadow-inner shadow-gray-600
                font-semibold rounded-sm overflow-hidden'>
                    <span className="bg-[#B69553] w-[90%] 
                    text-xs text-[#E8DEDA] h-2"></span>
                </div>

        </div>

        {/* game speed control */}
        <div className="flex
        h-full w-60 shrink-0
        py-2 px-2
        border rounded border-zinc-600
        ">
        <button
            className="h-full w-24
            bg-[#6A7070]
            border rounded-3xl border-zinc-700
            shadow-2xl shadow-zinc-700
            hover:cursor-pointer
            "
            style={{backgroundImage: "url(/assets/HourGlass.png)",
            backgroundRepeat: "no-repeat", backgroundPosition: "center",
            backgroundSize: "cover"
                }}
        ></button>
        <div className="ml-1 p-1 text-sm text-[#BBBCBC]
            ">
            <p className="text-center w-8/10 mb-1">Blocks Per Move</p>
            <p className="w-full flex justify-center items-center">
            <span> 4 </span>
            <span className="mx-2">{`>>`}</span>
            <span> 5 </span>
            </p>
        </div>
        </div>

        {/* pause panel */}
        <div className="
        h-full flex-auto flex flex-row justify-start items-center
        bg-[#383D3E]
        "
        >
            <div className="h-full w-1/3"
            style={{backgroundImage: "url(/assets/planning.png)",
            backgroundRepeat: "no-repeat", backgroundPosition: "left top",
            backgroundSize: "cover"
                }}
            ></div>
            <div className="flex-1 bg-transparent
            ml-7 text-xl text-[#BBBCBC]
            ">
                Planning
            </div>

        </div>

        {/* score panel */}
        <div className="h-full w-60 flex-none
        border rounded border-green-600
        ">

        </div>
        </nav>
    )
}
