import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertShow, setAlertShow] = useState(true);

  return (
    <div>
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
        color="warning"
        onClick={() => {
          if (!alertShow) setAlertShow(true);
        }}
      >
        <strong>Hey</strong> buddy
      </Button>
    </div>
  );
}

export default App;
