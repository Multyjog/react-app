import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Vologda", "Yarik", "Moscow", "St.Petersburg"];
  const heading = "Cities";
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
