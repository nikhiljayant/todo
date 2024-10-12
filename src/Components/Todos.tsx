import React from "react";
import { useTodos } from "../Context/TodosContext";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { allTodos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  let todos̥Data = searchParams.get("todos");

  let filterData = allTodos;

  if (todos̥Data === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todos̥Data === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <div>
      {(filterData ?? []).map((todo) => (
        <>
          <input
            type="checkbox"
            onChange={() => toggleTodoAsCompleted(todo.id)}
            checked={todo.completed}
          />
          <p>{todo.task}</p>
          {todo.completed && (
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          )}
        </>
      ))}
    </div>
  );
};

export default Todos;
