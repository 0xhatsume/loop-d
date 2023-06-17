import React from 'react';
import {  DemoBoard, DemoItemPanel,DemoTopNav } from '../../components';

export const Demo = () => {
  return (
    <div className="flex w-full">
        <div className="grow flex flex-col items-center">
        <DemoTopNav />
        <div className="w-full h-full flex flex-row justify-center">
            <DemoBoard />
            </div>
        </div>
        <DemoItemPanel/>
    </div>
  )
}
