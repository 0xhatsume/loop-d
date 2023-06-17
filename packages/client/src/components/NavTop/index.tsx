import React, {useRef} from 'react';
import { useMUD } from '../../MUDContext';
import { Entity, Has, getComponentValueStrict } from "@latticexyz/recs";
import { useComponentValue, useEntityQuery } from "@latticexyz/react";

export const NavTop = () => {
    const ref = useRef(null);
    const {
        components: { MapConfig, Player, BlockPerMove, Position, GameStart },
        network: { playerEntity, singletonEntity },
        systemCalls: { startGame, setBlocksPerMove},
    } = useMUD();

    const blockPerMove = useComponentValue(BlockPerMove, playerEntity)?.value;
    const gameStarted = useComponentValue(GameStart, playerEntity)?.value;

    const handleSetBlockPerMove = async () => {
        //console.log(ref.current.value)
        await setBlocksPerMove(parseInt(ref.current.value))
    }

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
            backgroundRepeat: "no-repeat", backgroundPosition: "top center",
            backgroundSize: "contain"
                }}

            onClick={handleSetBlockPerMove}
        ></button>
        <div className="ml-1 p-1 text-sm text-[#e1e7e7]
            ">
            <p className="text-center w-8/10 my-1
                font-medival font-bold text-sm
            ">
                Blocks Per Move</p>
            <p className="w-full flex justify-center items-center 
            text-[#c3c7c7]
            text-base font-extrabold">
            <span> {blockPerMove | `x` } </span>
            <span className="mx-2">{`>>`}</span>
            <span><input type="number" id="bpm" name="blocks per move"
            defaultValue={blockPerMove | 5 } 
            ref={ref}
            className="w-10 bg-transparent text-center"
            /></span>
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
            <div className="flex-1 bg-transparent font-medival font-extrabold text-3xl 
            ml-7 text-[#BBBCBC]
            ">
                Planning
            </div>

        </div>

        {/* score panel */}
        <div className="h-full flex-1 flex justify-end items-center
        "
        style={{backgroundImage: "url(/assets/bag.png)",
        backgroundRepeat: "no-repeat", backgroundPosition: "right center",
        backgroundSize: "cover"
        }}
        >
                <button className={`bg-transparent h-full w-32
                border rounded-3xl ${ gameStarted ? 'border-red-500' : 'border-[#383D3E]/20'}
                `}
                onClick={async ()=>{
                    await startGame();
                }}
                ></button>
            </div>
        </nav>
    )
}
