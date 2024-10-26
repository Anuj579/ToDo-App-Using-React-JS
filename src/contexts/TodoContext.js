import { createContext, useContext } from "react";

export const TodoContext = createContext({
  themeMode: "light",
  lightTheme: () => { },
  darkTheme: () => { },
  todos: [
    {
      id: 1,
      todo: "message",
      completed: false,
    },
  ],
  addTodo: (todo) => { },
  editTodo: (id, todo) => { },
  removeTodo: (id) => { },
  markTodo: (id) => { },
  clearSelected: () => { },
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
