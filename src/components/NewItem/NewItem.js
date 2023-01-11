import { useRef } from "react";

import { AiOutlinePlus } from "react-icons/ai";

import styles from "./NewItem.module.scss";

function NewItem(props) {
  const formRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredValue = formRef.current.newItem.value;

    // check if empty or includes only spaces
    if (enteredValue && enteredValue.replace(/ /g, "")) {
      props.onAddItem(enteredValue);
    }
    formRef.current.reset();
    formRef.current.newItem.focus();
  };

  return (
    <form onSubmit={formSubmitHandler} ref={formRef} className={styles.form}>
      <label htmlFor="newItem" hidden>
        New Item
      </label>
      <input
        id="newItem"
        type="text"
        placeholder="Add a new item"
        autoComplete="off"
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        <AiOutlinePlus />
      </button>
    </form>
  );
}

export default NewItem;
