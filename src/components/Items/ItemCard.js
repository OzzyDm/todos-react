import { useContext, useState } from "react";
import { ItemContext } from "../../App";
import styles from "./ItemCard.module.scss";
import { AiFillEdit, AiOutlineCheck, AiOutlineUndo } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

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
      <div>
        <button className={styles.button}>
          <AiFillEdit />
        </button>
        <button onClick={completeHandler} className={styles.button}>
          {isCompleted ? <AiOutlineUndo /> : <AiOutlineCheck />}
        </button>
        <button onClick={removeItemHandler} className={styles.button}>
          <BsFillTrashFill />
        </button>
      </div>
    </li>
  );
}

export default ItemCard;
