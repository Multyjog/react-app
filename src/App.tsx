// import { useState } from "react";
// import InitialExamples from "./components/Examples/InitialExamples/InitialExamples";
// import SharingState from "./components/Examples/SharingState/SharingState";
// import ExpandableTextWrapper from "./components/Examples/ExpandableText/ExpandableTextWrapper";
// import ExpenceOrganizer from "./components/Examples/ExpenceOrganizer/ExpenceOrganizer";
import BackendCall from "./components/Examples/EffectHook/EffectHook";
import "./App.css";

import { PiFinnTheHumanDuotone } from "react-icons/pi";

function App() {
  return (
    <div>
      {
        <>
          <div className="logo">
            <PiFinnTheHumanDuotone size="80" />
          </div>
          <BackendCall></BackendCall>
        </>
      }
    </div>
  );
}

export default App;
