import ItemCard from "./ItemCard";

function ItemList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <ItemCard key={item.id} id={item.id}>
          {item.text}
          <button>completed</button>
          <button onClick={props.onRemoveItem}>remove</button>
        </ItemCard>
      ))}
    </ul>
  );
}

export default ItemList;
