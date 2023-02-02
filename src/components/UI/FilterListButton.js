import styles from "./FilterListButton.module.scss";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { IoListCircleOutline } from "react-icons/io5";

function FilterListButton(props) {
  return (
    <div className={styles.section}>
      <input
        className={styles.button}
        type="radio"
        id="all"
        name="filter"
        value="all"
        checked={props.filter === "all"}
        onChange={props.changeHandler}
      />
      <label htmlFor="all" className={styles.icon} title="All Todos">
        <IoListCircleOutline />
      </label>
      <input
        className={styles.button}
        type="radio"
        id="todo"
        name="filter"
        value="todo"
        checked={props.filter === "todo"}
        onChange={props.changeHandler}
      />
      <label htmlFor="todo" className={styles.icon} title="Todos List">
        <AiOutlineClockCircle />
      </label>
      <input
        className={styles.button}
        type="radio"
        id="completed"
        name="filter"
        value="completed"
        checked={props.filter === "completed"}
        onChange={props.changeHandler}
      />
      <label htmlFor="completed" className={styles.icon} title="Completed List">
        <AiOutlineCheckCircle />
      </label>
    </div>
  );
}

export default FilterListButton;
