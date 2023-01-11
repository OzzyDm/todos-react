import ItemCard from "./ItemCard";
import styles from "./ItemList.module.scss";

function ItemList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <ItemCard key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default ItemList;
