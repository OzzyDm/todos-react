import { useContext, useEffect, useState, useRef, forwardRef } from "react";

import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineCheck, AiOutlineUndo, AiOutlineClose } from "react-icons/ai";
import { ItemContext } from "../../App";

import styles from "./ItemCard.module.scss";

const ItemCard = forwardRef((props, ref) => {
  const listState = useContext(ItemContext);

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.text);

  const inputRef = useRef();

  const itemIndex = listState.list.findIndex((item) => item.id === props.id);

  const statusChangeHandler = () => {
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
    setIsEditing(false);
    listState.setList((previousState) => {
      previousState[itemIndex].text = inputValue;
      return [...previousState];
    });
  };

  const onEditHandler = () => {
    setIsEditing(true);
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitHandler(event);
    }
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li ref={ref} className={styles.card}>
      {!props.status && (
        <button onClick={statusChangeHandler} className={styles.button}>
          <AiOutlineCheck />
        </button>
      )}
      {props.status && (
        <button onClick={statusChangeHandler} className={styles.button}>
          <AiOutlineUndo />
        </button>
      )}
      <form
        onSubmit={submitHandler}
        className={styles.form}
        onClick={onEditHandler}
      >
        <TextareaAutosize
          className={styles.input}
          value={inputValue}
          disabled={!isEditing}
          spellCheck={false}
          ref={inputRef}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={submitHandler}
          onKeyDown={handleKeyDown}
        />
      </form>
      <div>
        <button onClick={removeItemHandler} className={styles.remove}>
          <AiOutlineClose />
        </button>
      </div>
    </li>
  );
});

export default ItemCard;
