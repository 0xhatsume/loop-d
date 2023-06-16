import { useComponentValue } from "@latticexyz/react";
import { SyncState } from "@latticexyz/network";
import { useMUD } from "./MUDContext";
import { Home } from "./pages/Home";
import { Demo } from "./pages/Demo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      {
                loadingState.state !== SyncState.LIVE ? (
                  <div>
                    {loadingState.msg} ({Math.floor(loadingState.percentage)}%)
                  </div>
                ) : 
            (
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/demo" element={<Demo />} />
                </Routes>
              </Router>
            )}
      
    </div>
  );
};
