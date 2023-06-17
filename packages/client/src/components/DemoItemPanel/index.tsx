import React from 'react';
import { demoBlockNumberAtom, demoCounterAtom } from '../../store';
import { useAtom } from 'jotai';
import { RankingSlot } from '../RankingSlot';

export const DemoItemPanel = () => {
    const [counter,] = useAtom(demoCounterAtom);
    const [demoBlockNumber,] = useAtom(demoBlockNumberAtom);
    
    const player1ftState=[
        100,100,150,150,150,150,150,150,150,150
    ]
    const player2ftState=[
        100,100,50,50,50,90,0,0,0,0 
    ]
    const player3ftState=[
        100,100,100,80,80,80,170,170,170,0
    ]
    const player4ftState=[
        100,100,100,100,100,100,100,100,100,0
    ]

    return (
    <div className="bg-[#697070]
    border rounded-md border-neutral-700 
    drop-shadow-2xl
    h-screen w-1/5
    flex flex-col">

        {/* top panel */}
        <div className="bg-transparent w-full h-20 flex justify-end"
        style={{backgroundImage: "url(/assets/roundinfo.png)",
        backgroundRepeat: "no-repeat", backgroundPosition: "left top",
        backgroundSize: "contain"
        }}
        >
            <div className="w-1/2 font-medival text-xl text-right px-4 pt-3
            bg-[#697070] rounded-lg
            text-[#BEBFC1] font-extrabold
            ">
                <div className="whitespace-break-spaces sm:text-sm">Block Number</div>
                <div>{counter}</div>
            </div>

        </div>

        {/* ranking */}
        <div className="mx-4 my-2 flex flex-col justify-start items-center
            w-8/10 h-[14rem]
            shadow-inner shadow-gray-600
            border rounded-xl border-neutral-700 overflow-hidden
        "
        >   
            
            <RankingSlot 
            name="Name" 
            ft="FT"
            stake="Stake"
            status="Status"
            textcolor="white"
            />

            <RankingSlot 
            name="Player1" 
            ft={player1ftState[counter]}
            stake="0.1"
            status="Active"
            imageurl='/assets/warrior1.gif'
            />
            <RankingSlot 
            name="Player2" 
            ft={player2ftState[counter]}
            stake="0.1"
            status="Active"
            imageurl='/assets/warrior2.gif'
            />
            <RankingSlot 
            name="Player3" 
            ft={player3ftState[counter]}
            stake="0.1"
            status="Active"
            imageurl='/assets/warrior3.gif'
            />
            <RankingSlot 
            name="Player4" 
            ft={player4ftState[counter]}
            stake="0.1"
            status="Active"
            imageurl='/assets/warrior4.gif'
            />

        </div>

        {/* chat window */}
        <div className="mx-4 my-2 grow
        bg-[#6D271C]
        border rounded border-neutral-700
        shadow-inner shadow-neutral-700
        flex flex-col justify-end
        ">

        <div className="p-2 pb-4 relative">
            
            <input
            type="text"
            className="bg-white/10 focus:bg-white/30 placeholder:text-[#5F5453]/50 border border-white/20 focus:border-white rounded-md w-full px-2 py-1.5 focus:outline-none border"
            />
            <span className="absolute right-0 top-0 h-full p-2 pb-4">
                <button className="text-white/30 focus:text-white h-full flex items-center justify-center">
                    <svg className="h-5 w-12" viewBox="0 0 364 322">
                    <g opacity="1">
                        <path
                        d="M300.161 201.899C300.2 136.634 247.323 83.6947 182.058 83.6559C116.793 83.617 63.8535 136.493 63.8147 201.759L-18.9065 201.709C-18.8404 90.7585 71.1566 0.868666 182.107 0.934744C293.058 1.00082 382.948 90.9978 382.882 201.949L300.161 201.899Z"
                        fill="currentColor"
                        />
                        <path
                        d="M62.6579 201.758C62.6187 267.661 116.014 321.118
                181.915 321.157C247.816 321.196 301.275 267.803 301.314
                201.9L62.6579 201.758Z"
                        fill="currentColor"
                        />
                    </g>
                    </svg>
                </button>
            </span>
        </div>



        </div>
    </div>
    )
}
