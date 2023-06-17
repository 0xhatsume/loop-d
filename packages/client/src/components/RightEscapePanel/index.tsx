import React from 'react'

export const RightEscapePanel = () => {
  return (
    <div className="h-full w-44 flex flex-col justify-end items-end">
        <button className="mb-2 w-1/2 h-24 bg-transparent
        rounded-l-xl overflow-hidden
        " 
        style={{backgroundImage: "url(/assets/escapeButton.png)",
        backgroundRepeat: "no-repeat", backgroundPosition: "right center",
        backgroundSize: "contain"
        }}
        ></button>
    </div>
  )
}
