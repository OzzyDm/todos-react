import FlipMove from "react-flip-move";

import ItemCard from "./ItemCard";

import styles from "./ItemList.module.scss";

function ItemList(props) {
  return (
    <FlipMove typeName="ul" className={styles.list}>
      {props.items
        .filter((item) => {
          if (props.filter === "todo") {
            return !item.completed;
          }
          if (props.filter === "completed") {
            return item.completed;
          }
          return item;
        })
        .map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            text={item.text}
            status={item.completed}
          />
        ))}
    </FlipMove>
  );
}

export default ItemList;
