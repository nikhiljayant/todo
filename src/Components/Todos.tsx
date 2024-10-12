import React from "react";
import { useTodos } from "../Context/TodosContext";

const Todos = () => {
  const { allTodos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  return (
    <div>
      {(allTodos ?? []).map((todo) => (
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
