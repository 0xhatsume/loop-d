import React from 'react';
import { NavTop, ItemPanel } from '../../components';
import {  DemoBoard } from '../../components';

export const Demo = () => {
  return (
    <div className="flex w-full">
        <div className="grow flex flex-col items-center">
        <NavTop />
        <div className="w-full h-full flex flex-row justify-center">
            <DemoBoard />
            </div>
        </div>
        <ItemPanel/>
    </div>
  )
}
