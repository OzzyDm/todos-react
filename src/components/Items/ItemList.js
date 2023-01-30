import FlipMove from "react-flip-move";

import ItemCard from "./ItemCard";

import styles from "./ItemList.module.scss";

function ItemList(props) {
  if (props.filter === "all") {
    return (
      <FlipMove typeName="ul" className={styles.list}>
        {props.items.map((item) => (
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
  if (props.filter === "todo") {
    return (
      <FlipMove typeName="ul" className={styles.list}>
        {props.items
          .filter((item) => item.completed === false)
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
  if (props.filter === "completed") {
    return (
      <FlipMove typeName="ul" className={styles.list}>
        {props.items
          .filter((item) => item.completed === true)
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
}

export default ItemList;
