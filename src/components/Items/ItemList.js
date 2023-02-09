import FlipMove from "react-flip-move";

import ItemCard from "./ItemCard";

import styles from "./ItemList.module.scss";

function ItemList(props) {
  const filteredItems = props.items.filter((item) => {
    if (props.filter === "todo") {
      return !item.completed;
    }
    if (props.filter === "completed") {
      return item.completed;
    }
    return item;
  });

  return (
    <FlipMove typeName="ul" className={styles.list}>
      {filteredItems.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          text={item.text}
          status={item.completed}
        />
      ))}
      {(!filteredItems || !filteredItems.length) && (
        <p className={styles.fallback}>There's nothing to show here.</p>
      )}
    </FlipMove>
  );
}

export default ItemList;
