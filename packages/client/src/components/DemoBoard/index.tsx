import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { demoBlockNumberAtom, demoCounterAtom } from '../../store';

export const DemoBoard = () => {

  const boardCoords = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 0
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 1
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 2
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 3 
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 4 
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 5
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 6
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 7
    [0, 1, 2, 3, 4, 5, 6, 7, 8] // 8 
  ];

  

  const player1states = [
    [2,2], [3,2], [3,1], [3,2], [3,3], [3,4], [3,5], [4,5], [4,6], [5,6]
  ]
  const player2states = [
    [5,3], [5,4], [4,4], [5,4], [5,3], [5,2], [3,5], [88,88], [88,88], [88,88]
  ]
  const player3states = [
    [8,6], [7,6], [6,6], [6,5], [6,4], [6,3], [5,3], [5,4], [5,5], [88,88]
  ]
  const player4states = [
    [2,6], [2,5], [2,4], [2,5], [3,5], [4,5], [5,5], [5,6], [6,6], [88,88]
  ]

  const fruit1states = [
    [3, 1], [3, 1], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88]
  ]
  const fruit2states = [
    [6, 5], [6, 5], [6, 5], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88]
  ]
  const fruit3states = [
    [4, 4], [4, 4], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88], [88,88]
  ]

  const [player1coords, setPlayer1coords] = useState(player1states[0]);
  const [player2coords, setPlayer2coords]  = useState(player2states[0]);
  const [player3coords, setPlayer3coords]  = useState(player3states[0]);
  const [player4coords, setPlayer4coords]  = useState(player4states[0]);

  const [fruit1coords, setFruit1coords] = useState(fruit1states[0]);
  const [fruit2coords, setFruit2coords] = useState(fruit2states[0]);
  const [fruit3coords, setFruit3coords] = useState(fruit3states[0]);
  const player1gif = "/assets/warrior1.gif";
  const player2gif = "/assets/warrior2.gif";
  const player3gif = "/assets/warrior3.gif";
  const player4gif = "/assets/warrior4.gif";
  const fruitgif = "/assets/animatedETH.gif";

  const height = boardCoords.length;
  const width = boardCoords[0].length;

  const [demoBlockNumber, setDemoBlockNumber] = useAtom(demoBlockNumberAtom);
  const [counter, setCounter] = useAtom(demoCounterAtom);
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoBlockNumber((prevBlockNumber) => prevBlockNumber + 1);
      
      setCounter((prevCounter) => {
        const count = prevCounter==9? 0: prevCounter + 1;
        setPlayer1coords(player1states[count]);
        setPlayer2coords(player2states[count]);
        setPlayer3coords(player3states[count]);
        setPlayer4coords(player4states[count]);
        setFruit1coords(fruit1states[count]);
        setFruit2coords(fruit2states[count]);
        setFruit3coords(fruit3states[count]);
        return count;
      });

      
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-[40rem] h-[40rem]
    mt-8 inline-grid grid-rows-9 grid-cols-9
    grid-flow-cols
    `}>
      {
        boardCoords.map((row, y) => {
          return row.map((col, x) => {
            return (
              <div 
                key={`${x}-${y}`}
                className={`
                ${((counter>=4 && counter<=7)&& ((x==0||x==8) || (y==0||y==8)))?
                  'bg-black':
                  ((counter>=8)&& ((x<=1||x>=7) || (y<=1||y>=7)))?
                  'bg-black':
                  'bg-[#697070]'}
                text-center
                border border-[#383D3E]`}
                >
                  { 
                    (JSON.stringify(player1coords) === JSON.stringify([x, y])) && 
                    <div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${player1gif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />
                  }
                  { 
                    (JSON.stringify(player2coords) === JSON.stringify([x, y])) && 
                    <div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${player2gif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />
                  }
                  { 
                    (JSON.stringify(player3coords) === JSON.stringify([x, y])) && 
                    <div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${player3gif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />
                  }
                  { 
                    (JSON.stringify(player4coords) === JSON.stringify([x, y])) && 
                    <div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${player4gif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />
                  }
                  { 
                    (JSON.stringify(fruit1coords) === JSON.stringify([x, y]))
                    && 
                    (<div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${fruitgif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />)
                  }
                  { 
                    (JSON.stringify(fruit2coords) === JSON.stringify([x, y]))
                    && 
                    (<div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${fruitgif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />)
                  }
                  { 
                    (JSON.stringify(fruit3coords) === JSON.stringify([x, y]))
                    && 
                    (<div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${fruitgif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />)
                  }
                  { 
                    (counter==4 && x==5 && y==2)
                    && 
                    (<div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${fruitgif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />)
                  }
                  { 
                    (counter>=8 && x==3 && y==3)
                    && 
                    (<div className="z-20 w-full h-full" 
                    style={{ backgroundImage: `url(${fruitgif})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover"
                    }}
                    />)
                  }
                  {/* {(x==0 && y==0)?counter:""} */}
              </div>
            )
          })
        })

      }
    </div>
  )
}
