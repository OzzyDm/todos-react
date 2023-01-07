function ItemList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id} id={item.id}>
          {item.text}
          <button>remove</button>
          <button>completed</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
