import { useRef, useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";

import styles from "./NewItem.module.scss";

function NewItem(props) {
  const formRef = useRef();
  const [enteredInput, setEnteredInput] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // check if empty or includes only spaces
    if (enteredInput && enteredInput.replace(/ /g, "")) {
      props.onAddItem(enteredInput);
    }
    setEnteredInput("");
    formRef.current.newItem.focus();
  };

  const onChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const onBlurHandler = (event) => {
    setEnteredInput(event.target.value);
    if (enteredInput) {
      formRef.current.newItem.focus();
    }
  };

  const focusOnClick = () => {
    formRef.current.newItem.focus();
  };

  return (
    <form onSubmit={formSubmitHandler} ref={formRef} className={styles.form}>
      <button type="submit" className={styles.submitButton}>
        <AiOutlinePlus />
      </button>
      <button
        type="button"
        className={styles.focusButton}
        onClick={focusOnClick}
      >
        What needs to be done?
      </button>
      <label htmlFor="newItem" hidden>
        Add a new item
      </label>
      <input
        id="newItem"
        type="text"
        autoComplete="off"
        spellCheck="false"
        value={enteredInput}
        className={styles.input}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </form>
  );
}

export default NewItem;
