import { useState } from "react";
import "./App.scss";
import ItemList from "./components/NewItem/ItemList";
import NewItem from "./components/NewItem/NewItem";

function App() {
  const [list, setList] = useState([]);

  const addItemHandler = (enteredText) => {
    setList((prevGoals) => {
      const updatedList = [...prevGoals];
      updatedList.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedList;
    });
  };

  return (
    <div className="App">
      <NewItem onAddItem={addItemHandler} />
      <ItemList items={list} />
    </div>
  );
}

export default App;
