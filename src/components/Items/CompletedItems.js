import ItemCard from "./ItemCard";
import styles from "./CompletedItems.module.scss";
import { Fragment } from "react";

function CompletedTasks(props) {
  const notEmpty = props.items.find((item) => item.completed);

  return (
    <Fragment>
      {notEmpty && <h2 className={styles.title}>Completed</h2>}
      <ul className={styles.list}>
        {props.items
          .filter((item) => item.completed === true)
          .map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              text={item.text}
              status={item.completed}
            />
          ))}
      </ul>
    </Fragment>
  );
}

export default CompletedTasks;
