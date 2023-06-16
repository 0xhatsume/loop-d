import React from 'react';
import { NavTop, ItemPanel, LeftInvokePanel, RightEscapePanel } from '../../components';
import { GameBoard } from '../../GameBoard';

export const Home = () => {
  return (
    <div className="flex w-full">
        <div className="grow flex flex-col items-center">
        <NavTop />
        <div className="w-full h-full flex flex-row justify-between">

            <LeftInvokePanel/>

            <GameBoard />

            <RightEscapePanel/>
            </div>
        </div>
        <ItemPanel/>
    </div>
  )
}
