import React from 'react'

export const NavTop = () => {
    return (
        <nav className="bg-[#6A7070] 
        flex flex-row items-center 
        justify-normal 
        border-2 rounded-md border-neutral-700 
        drop-shadow-2xl
            h-20 w-full
        ">

        {/* world status bars */}
        <div className="flex flex-col items-center justify-center
            h-full w-10 flex-auto
            border-x rounded border-zinc-600
            "
        >
            <img className="w-full h-full" src ="/assets/worldstatus.png"/>
        </div>

        {/* game speed control */}
        <div className="flex
        h-full w-60 shrink-0
        py-2 px-2
        bg-[#7A7E7F]
        "
        
        style={{backgroundImage: "url(/assets/hourbacking.png)",
        backgroundRepeat: "no-repeat", backgroundPosition: "left center",
        backgroundSize: "cover"
        }}
        >
        <button
            className="h-full w-24
            bg-[#6A7070]
            border rounded-3xl border-[#383D3E]/20
            shadow-2xl shadow-zinc-700
            hover:cursor-pointer
            "
            style={{backgroundImage: "url(/assets/hourglass.png)",
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
        bg-[#383D3E] border-r border-[#404647]
        "
        >
            <div className="h-full flex-1"
            style={{backgroundImage: "url(/assets/planning.png)",
            backgroundRepeat: "no-repeat", backgroundPosition: "left top",
            backgroundSize: "contain"
                }}
            ></div>
            <div className="flex-1 bg-transparent font-medival text-4xl
            ml-7 text-xl text-[#BBBCBC]
            ">
                Planning
            </div>

        </div>

        {/* score panel */}
        <div className="h-full flex-1
        "
        style={{backgroundImage: "url(/assets/bag.png)",
        backgroundRepeat: "no-repeat", backgroundPosition: "right center",
        backgroundSize: "cover"
        }}
        >

            </div>
        </nav>
    )
}
