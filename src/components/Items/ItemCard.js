import { useContext, useEffect, useState, useRef } from "react";
import { ItemContext } from "../../App";
import styles from "./ItemCard.module.scss";
import { AiFillEdit, AiOutlineCheck, AiOutlineUndo } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function ItemCard(props) {
  const listState = useContext(ItemContext);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(props.text);
  const text = useRef();

  const completeHandler = () => {
    listState.list.find((item) => item.id === props.id);
    const itemIndex = listState.list.findIndex((item) => item.id === props.id);
    listState.setList((previousState) => {
      previousState[itemIndex].completed = !previousState[itemIndex].completed;
      return [...previousState];
    });
  };

  const removeItemHandler = () => {
    listState.setList((previousState) => {
      return [...previousState.filter((item) => item.id !== props.id)];
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    listState.list.find((item) => item.id === props.id);
    const itemIndex = listState.list.findIndex((item) => item.id === props.id);
    listState.setList((previousState) => {
      previousState[itemIndex].text = value;
      return [...previousState];
    });
  };

  const onEditHandler = () => {
    setIsEditing(!isEditing);
    text.current.focus();
  };

  useEffect(() => {
    if (isEditing) {
      text.current.focus();
    }
  }, [isEditing]);

  return (
    <li className={styles.card}>
      <form onSubmit={submitHandler}>
        <input
          className={styles}
          value={value}
          disabled={!isEditing}
          ref={text}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={submitHandler}
        ></input>
      </form>
      <div>
        <button className={styles.button} onClick={onEditHandler}>
          <AiFillEdit />
        </button>
        {!props.status && (
          <button onClick={completeHandler} className={styles.button}>
            <AiOutlineCheck />
          </button>
        )}
        {props.status && (
          <button onClick={completeHandler} className={styles.button}>
            <AiOutlineUndo />
          </button>
        )}
        <button onClick={removeItemHandler} className={styles.button}>
          <BsFillTrashFill />
        </button>
      </div>
    </li>
  );
}

export default ItemCard;
