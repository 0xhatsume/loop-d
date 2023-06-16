import { ReactNode, useEffect, useState } from "react";
import { Entity } from "@latticexyz/recs";
import { twMerge } from "tailwind-merge";
import { useMUD } from "./MUDContext";

type Props = {
  width: number;
  height: number;
  onTileClick?: (x: number, y: number) => void;
  terrain?: {
    x: number;
    y: number;
    emoji: string;
  }[];
  players?: {
    x: number;
    y: number;
    emoji: string;
    entity: Entity;
  }[];
  encounter?: ReactNode;
};

export const GameMap = ({
  width,
  height,
  onTileClick,
  terrain,
  players,
  encounter,
}: Props) => {
  const {
    network: { playerEntity },
  } = useMUD();

  const rows = new Array(width).fill(0).map((_, i) => i);
  const columns = new Array(height).fill(0).map((_, i) => i);

  const [showEncounter, setShowEncounter] = useState(false);
  // Reset show encounter when we leave encounter
  useEffect(() => {
    if (!encounter) {
      setShowEncounter(false);
    }
  }, [encounter]);

  return (
    <div className="inline-grid w-[44rem] h-[44rem]
      bg-[#3A403D] overflow-hidden mt-8">
      {rows.map((y) =>
        columns.map((x) => {

          // check which emoji
          const terrainEmoji = terrain?.find(
            (t) => t.x === x && t.y === y
          )?.emoji;
          
          const playersHere = players?.filter((p) => p.x === x && p.y === y);
          const mainPlayerHere = playersHere?.find(
            (p) => p.entity === playerEntity
          );
          
          // terrainEmoji === "tree" ? console.log(`(${x},${y})`) : null;
          return (
            <div
              key={`${x},${y}`}
              className="w-full h-full p-1 flex items-center justify-center 
              cursor-pointer hover:ring"
              style={{
                gridColumn: x + 1,
                gridRow: y + 1,
                backgroundImage: 
                  terrainEmoji === "tree" ? "url(/assets/path.png)" : "",
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              onClick={() => {
                onTileClick?.(x, y);
              }}
            >


              {encounter && mainPlayerHere ? (
                <div
                  className="absolute z-10 animate-battle"
                  style={{
                    boxShadow: "0 0 0 100vmax black",
                  }}
                  onAnimationEnd={() => {
                    setShowEncounter(true);
                  }}
                ></div>
              ) : null}


                {/* players icon */}
                <>
                  {playersHere?.map((p) => (
                    // <span key={p.entity}>{p.emoji}</span>
                    <div className="w-full h-full z-20" 
                    style={{backgroundImage: "url(/assets/claymorebash.gif)",
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    key={p.entity}></div>
                  ))}
                </>


            </div>
          );
        })
      )}

      {encounter && showEncounter ? (
        <div
          className="relative z-10 -m-2 bg-black text-white flex items-center justify-center"
          style={{
            gridColumnStart: 1,
            gridColumnEnd: width + 1,
            gridRowStart: 1,
            gridRowEnd: height + 1,
          }}
        >
          {encounter}
        </div>
      ) : null}
    </div>

  );
};
