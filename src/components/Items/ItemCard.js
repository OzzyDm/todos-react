import { useContext, useEffect, useState, useRef, forwardRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlinePlus } from "react-icons/ai";
import { ItemContext } from "../../App";

import CheckmarkBoxIcon from "../UI/CheckmarkBoxIcon";

import styles from "./ItemCard.module.scss";

const ItemCard = forwardRef((props, ref) => {
  const listState = useContext(ItemContext);

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.text);

  const inputRef = useRef();

  const itemIndex = listState.list.findIndex((item) => item.id === props.id);

  const completeHandler = () => {
    listState.setList((previousState) => {
      previousState[itemIndex].completed = true;
      previousState.push(previousState.splice(itemIndex, 1)[0]);
      return [...previousState];
    });
  };

  const uncompleteHandler = () => {
    listState.setList((previousState) => {
      previousState[itemIndex].completed = false;
      previousState.unshift(previousState.splice(itemIndex, 1)[0]);
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
    <li
      ref={ref}
      className={`${styles.card} ${props.status ? styles.completed : ""}`}
    >
      <CheckmarkBoxIcon
        onClick={!props.status ? completeHandler : uncompleteHandler}
        status={props.status}
      />
      <form
        className={styles.form}
        onSubmit={submitHandler}
        onClick={onEditHandler}
      >
        <TextareaAutosize
          className={`${styles.input} ${
            props.status ? styles.completedTextarea : ""
          }`}
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

      <i
        onClick={removeItemHandler}
        className={`${styles.removeIcon} ${
          props.status ? styles.completedRemoveIcon : ""
        }`}
      >
        <AiOutlinePlus />
      </i>
    </li>
  );
});

export default ItemCard;
