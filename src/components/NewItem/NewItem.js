import { useRef } from "react";
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
  };

  return (
    <form onSubmit={formSubmitHandler} ref={formRef}>
      <label htmlFor="newItem" hidden>
        New Item
      </label>
      <input
        id="newItem"
        type="text"
        placeholder="Enter a new item.."
        autoComplete="off"
      />
    </form>
  );
}

export default NewItem;
