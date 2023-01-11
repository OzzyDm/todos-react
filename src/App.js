import { createContext, useState } from "react";

import Layout from "./components/Layout/Layout";
import ItemList from "./components/Items/ItemList";
import NewItem from "./components/NewItem/NewItem";

export const ItemContext = createContext();

function App() {
  const [list, setList] = useState([]);

  const addItemHandler = (enteredText) => {
    setList((prevItems) => {
      const updatedList = [...prevItems];
      updatedList.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedList;
    });
  };

  console.log(list);

  return (
    <ItemContext.Provider value={{ list: list, setList: setList }}>
      <Layout>
        <NewItem onAddItem={addItemHandler} />
        <ItemList items={list} />
      </Layout>
    </ItemContext.Provider>
  );
}

export default App;
