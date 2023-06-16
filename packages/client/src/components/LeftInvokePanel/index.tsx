import React from 'react';
import { Link } from "react-router-dom";

export const LeftInvokePanel = () => {
  return (
    <div className="h-full w-44 flex flex-col items-start">
                
                  <Link to={`/demo`} className="mt-2 mr-5 w-10/12 h-20 
                  bg-[#6A7070]
                  border-2 rounded-lg border-gray-300 border-double
                  font-medival font-extrabold flex items-center justify-center
                  hover:cursor-pointer
                  ">
                    DEMO
                  </Link>
                <button className="mt-2 mr-5 w-10/12 h-20 
                bg-[#6A7070]
                border-2 rounded-lg border-gray-300 border-double
                font-medival font-extrabold
                ">
                  REAL PvP
                </button>
              </div>
  )
}
