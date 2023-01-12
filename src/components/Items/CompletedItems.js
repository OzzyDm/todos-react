import ItemCard from "./ItemCard";
import styles from "./CompletedItems.module.scss";

function CompletedTasks(props) {
  return (
    <div>
      <h2 className={styles.title}>Completed</h2>
      <ul>
        {props.items
          .filter((item) => item.completed === true)
          .map((item) => (
            <ItemCard key={item.id} id={item.id} text={item.text} />
          ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
