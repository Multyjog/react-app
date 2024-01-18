// import { useState } from "react";
// import InitialExamples from "./components/Examples/InitialExamples/InitialExamples";
// import SharingState from "./components/Examples/SharingState/SharingState";
import { useState } from "react";
import ExpandableText from "./components/Examples/ExpandableText/ExpandableText";

import { PiFinnTheHumanDuotone } from "react-icons/pi";

function App() {
  const [textCollapse, setTextCollapse] = useState(true);
  return (
    <div>
      {
        <>
          <PiFinnTheHumanDuotone size="80" />
          <ExpandableText
            isCollapsed={textCollapse}
            charsLimit={10}
            toggleTextState={() => setTextCollapse(!textCollapse)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam rem
            sint, eveniet incidunt et autem enim culpa, repellendus iusto fugiat
            tenetur possimus quidem blanditiis reiciendis assumenda ratione!
            Quis quam, ipsum eligendi sed facilis totam quasi mollitia qui?
            Veritatis alias totam accusantium velit reiciendis deserunt ex neque
            aut laudantium eius nobis mollitia dolor, repellat omnis at nisi
            quaerat ea obcaecati maiores eum, distinctio tempora doloribus
            ratione optio? Dicta sed iste suscipit illum, quam repellendus porro
            accusamus vero nesciunt fuga delectus eius doloribus culpa tempora
            ex iusto deserunt? Quia enim placeat, quidem optio, totam sint eos
            numquam tenetur consequatur, omnis aut quae.
          </ExpandableText>
          {/* <SharingState /> */}
          {/* <InitialExamples /> */}
        </>
      }
    </div>
  );
}

export default App;
