function ItemCard(props) {
  return (
    <li>
      <p>{props.text}</p>
      <button>completed</button>
      <button>remove</button>
    </li>
  );
}

export default ItemCard;
