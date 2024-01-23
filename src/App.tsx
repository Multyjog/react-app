// import InitialExamples from "./components/Examples/InitialExamples/InitialExamples";
// import SharingState from "./components/Examples/SharingState/SharingState";
// import ExpandableTextWrapper from "./components/Examples/ExpandableText/ExpandableTextWrapper";
// import ExpenceOrganizer from "./components/Examples/ExpenceOrganizer/ExpenceOrganizer";
// import EffectHook from "./components/Examples/EffectHook/EffectHook";
// import ProductList from "./components/Examples/ProductList/ProductList";
import Request from "./components/Examples/Request/Request";
import "./App.css";

import { PiFinnTheHumanDuotone } from "react-icons/pi";

function App() {
  return (
    <div>
      {
        <>
          <div className="logo">
            <PiFinnTheHumanDuotone size="80" />
            <Request></Request>
          </div>
        </>
      }
    </div>
  );
}

export default App;
