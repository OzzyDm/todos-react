import { useContext } from "react";
import { ItemContext } from "../../App";
import styles from "./ItemCard.module.scss";

function ItemCard(props) {
  const listState = useContext(ItemContext);

  const removeItemHandler = () => {
    listState.setList((previousState) => {
      return [...previousState.filter((item) => item.id !== props.id)];
    });
  };

  return (
    <li className={styles.card}>
      <p>{props.text}</p>
      <button>completed</button>
      <button onClick={removeItemHandler}>remove</button>
    </li>
  );
}

export default ItemCard;
