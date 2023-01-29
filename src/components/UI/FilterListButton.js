import { useState } from "react";

function FilterListButton() {
  const [filter, setFilter] = useState("all");

  const onOptionChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label for="all">All</label>
      <input
        type="radio"
        id="all"
        name="filter"
        value="all"
        checked={filter === "all"}
        onChange={onOptionChange}
      />
      <label for="todo">To Do</label>
      <input
        type="radio"
        id="todo"
        name="filter"
        value="todo"
        checked={filter === "todo"}
        onChange={onOptionChange}
      />

      <label for="completed">Completed</label>
      <input
        type="radio"
        id="completed"
        name="filter"
        value="completed"
        checked={filter === "completed"}
        onChange={onOptionChange}
      />
    </div>
  );
}

export default FilterListButton;
