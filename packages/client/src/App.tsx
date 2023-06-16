import { useComponentValue } from "@latticexyz/react";
import { SyncState } from "@latticexyz/network";
import { useMUD } from "./MUDContext";
import { GameBoard } from "./GameBoard";
import { NavTop, ItemPanel } from "./components";
import '../index.css';

export const App = () => {
  const {
    components: { LoadingState },
    network: { singletonEntity },
  } = useMUD();

  const loadingState = useComponentValue(LoadingState, singletonEntity, {
    state: SyncState.CONNECTING,
    msg: "Connecting",
    percentage: 0,
  });

  return (
    <div className="w-screen h-screen">
      
        <div className="flex w-full">
          <div className="grow flex flex-col items-center">
            <NavTop />
            {
                loadingState.state !== SyncState.LIVE ? (
                  <div>
                    {loadingState.msg} ({Math.floor(loadingState.percentage)}%)
                  </div>
                ) : 
            (
              <GameBoard />
            )}
          </div>
          <ItemPanel/>
        </div>
      
      
    </div>
  );
};
