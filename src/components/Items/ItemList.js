import ItemCard from "./ItemCard";

function ItemList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <ItemCard key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default ItemList;
