import { useContext, useEffect } from "react";
import { ItemContext } from "../../App";
import styles from "./ItemCard.module.scss";
import { AiFillEdit, AiOutlineCheck, AiOutlineUndo } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import "aos/dist/aos.css";
import Aos from "aos";

function ItemCard(props) {
  const listState = useContext(ItemContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const completeHandler = () => {
    listState.list.find((item) => item.id === props.id);
    const itemIndex = listState.list.findIndex((item) => item.id === props.id);
    listState.setList((previousState) => {
      previousState[itemIndex].completed = true;
      return [...previousState];
    });
  };

  const removeItemHandler = () => {
    listState.setList((previousState) => {
      return [...previousState.filter((item) => item.id !== props.id)];
    });
  };

  return (
    <li className={styles.card} data-aos="fade-down">
      <p className={styles}>{props.text}</p>
      <div>
        <button className={styles.button}>
          <AiFillEdit />
        </button>
        <button onClick={completeHandler} className={styles.button}>
          <AiOutlineCheck />
        </button>
        <button onClick={removeItemHandler} className={styles.button}>
          <BsFillTrashFill />
        </button>
      </div>
    </li>
  );
}

export default ItemCard;
