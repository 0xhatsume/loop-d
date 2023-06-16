import React from 'react'

export const RankingSlot = ({
    name, ft, stake, status, 
    textcolor="[#BEBFC1]", imageurl=""}) => {
  return (
    <div className={`w-full py-2 px-4
                text-medival text-${textcolor} text-sm
                grid grid-cols-7
                border-y rounded-md border-gray-600
                `}>
                    <span className="col-span-1 px-2"
                    style={{backgroundImage: `url(${imageurl})`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "contain"
                    }}
                    >
                    </span>
                    <span className="col-span-2">{name}</span>
                    <span className="col-span-2 text-center border-x">{ft}</span>
                    <span className="text-center border-r">{stake}</span>
                    <span className="text-end">{status}</span>
    </div>
  )
}