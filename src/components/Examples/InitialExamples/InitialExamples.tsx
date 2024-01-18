import { useState } from "react";
import { produce } from "immer";

import Alert from "./Alert";
import Button from "./Button/Button";
import Like from "./Like";
import ListGroup from "./ListGroup/ListGroup";
import Message from "./Message";

const InitialExamples = () => {
  const [alertShow, setAlertShow] = useState(false);
  const items = ["Moscow", "Yarik", "Saint P.", "Vologda"];
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((el) => el.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {
        <>
          <Message />
          <ListGroup
            items={items}
            heading="cities"
            onSelectItem={(item) => console.log(item)}
          />
          <Like onClick={() => console.log("clicked")} />
          {alertShow && (
            <Alert
              onClose={() => {
                if (alertShow) setAlertShow(false);
              }}
            >
              <strong>Hey there folk!</strong> I am here!
            </Alert>
          )}
          {bugs.map((bug) => (
            <div key={bug.id}>
              {bug.title} {bug.fixed ? "Fixed" : "New"}
            </div>
          ))}
          <Button
            onClick={() => {
              handleClick();
            }}
          >
            FIX A BUG!
          </Button>
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
};

export default InitialExamples;
