import { useContext, useState } from "react";
import { ItemContext } from "../../App";
import styles from "./ItemCard.module.scss";

function ItemCard(props) {
  const listState = useContext(ItemContext);
  const [isCompleted, setIsCompleted] = useState(false);

  const completeHandler = () => {
    setIsCompleted(!isCompleted);
  };

  const removeItemHandler = () => {
    listState.setList((previousState) => {
      return [...previousState.filter((item) => item.id !== props.id)];
    });
  };

  return (
    <li className={styles.card}>
      <p className={isCompleted ? styles.text : ""}>{props.text}</p>
      <button>edit</button>
      <button onClick={completeHandler}>
        {isCompleted ? "undo" : "completed"}
      </button>
      <button onClick={removeItemHandler}>remove</button>
    </li>
  );
}

export default ItemCard;
