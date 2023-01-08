import { useState, Fragment } from "react";
import "./App.scss";
import ItemList from "./components/Items/ItemList";
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
    <Fragment>
      <NewItem onAddItem={addItemHandler} />
      <ItemList items={list} />
    </Fragment>
  );
}

export default App;
