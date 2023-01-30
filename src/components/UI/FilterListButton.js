function FilterListButton(props) {
  return (
    <div>
      <label for="all">All</label>
      <input
        type="radio"
        id="all"
        name="filter"
        value="all"
        checked={props.filter === "all"}
        onChange={props.changeHandler}
      />
      <label for="todo">To Do</label>
      <input
        type="radio"
        id="todo"
        name="filter"
        value="todo"
        checked={props.filter === "todo"}
        onChange={props.changeHandler}
      />
      <label for="completed">Completed</label>
      <input
        type="radio"
        id="completed"
        name="filter"
        value="completed"
        checked={props.filter === "completed"}
        onChange={props.changeHandler}
      />
    </div>
  );
}

export default FilterListButton;
