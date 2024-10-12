import React, { createContext, ReactNode, useContext, useState } from "react";

export type Children = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosListAndActions = {
  allTodos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const todosContext = createContext<TodosListAndActions | null>(null);

const TodosContext = ({ children }: Children) => {
  const [allTodos, setAllTodos] = useState<Todo[]>();

  const handleAddTodo = (task: string) => {
    setAllTodos((prev) => {
      const newTodos = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...(prev ?? []),
      ];
      //   localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setAllTodos((prev) => {
      let newTodos = (prev ?? []).map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = allTodos?.filter((todo) => todo.id !== id);
    setAllTodos(updatedTodos);
  };

  return (
    <todosContext.Provider
      value={{
        toggleTodoAsCompleted,
        handleAddTodo,
        handleDeleteTodo,
        allTodos,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodosContext;

// Consumer
export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("No Component Found!");
  }
  return todosConsumer;
};
