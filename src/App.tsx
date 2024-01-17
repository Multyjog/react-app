import { useState } from "react";

import Like from "./components/Like";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";

import { PiFinnTheHumanDuotone } from "react-icons/pi";

function App() {
  const [alertShow, setAlertShow] = useState(false);
  const items = ["Moscow", "Yarik", "Saint P.", "Vologda"];

  return (
    <div>
      {
        <>
          <PiFinnTheHumanDuotone size="80" />
          <ListGroup
            items={items}
            heading="cities"
            onSelectItem={(item) => console.log(item)}
          />
          <Like />
          {alertShow && (
            <Alert
              onClose={() => {
                if (alertShow) setAlertShow(false);
              }}
            >
              <strong>Hey there folk!</strong> I am here!
            </Alert>
          )}
          <Button
            onClick={() => {
              if (!alertShow) setAlertShow(true);
            }}
          >
            <strong>Hey</strong> buddy
          </Button>
        </>
      }
    </div>
  );
}

export default App;
