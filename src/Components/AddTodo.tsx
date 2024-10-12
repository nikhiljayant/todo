import React, { FormEvent, useState } from "react";
import { useTodos } from "../Context/TodosContext";

const AddTodo = () => {
  const { handleAddTodo } = useTodos();

  const [todo, setTodo] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
