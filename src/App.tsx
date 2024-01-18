// import { useState } from "react";
// import InitialExamples from "./components/Examples/InitialExamples/InitialExamples";
import SharingState from "./components/Examples/SharingState/SharingState";

import { PiFinnTheHumanDuotone } from "react-icons/pi";

function App() {
  return (
    <div>
      {
        <>
          <PiFinnTheHumanDuotone size="80" />
          <SharingState />
          {/* <InitialExamples /> */}
        </>
      }
    </div>
  );
}

export default App;
