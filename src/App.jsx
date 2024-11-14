import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";

import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import Footer from "./components/Footer/Footer";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const editTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const [selectedTodos, setSelectedTodos] = useState([]);
  const [disabled, setDisabled] = useState(true); // Initially disabled

  const markTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );

    // Update selectedTodos directly based on completed state of todos
    setSelectedTodos(todos.filter((todo) => todo.completed));
  };

  const clearSelected = () => {
    // Filter out completed todos from the original `todos` array
    setTodos(todos.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    setDisabled(todos.some((todo) => todo.completed));
  }, [selectedTodos, todos]);

  useEffect(() => {
    const targetElement = document.querySelector("html");
    targetElement.classList.remove("light", "dark");
    targetElement.classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        themeMode,
        lightTheme,
        darkTheme,
        todos,
        addTodo,
        editTodo,
        removeTodo,
        markTodo,
        clearSelected,
      }}
    >
      <Header />
      <div className="w-full max-w-3xl mx-auto">
        <p className="my-10 mx-2 sm:mx-auto text-black dark:text-white max-w-2xl text-2xl duration-200">
          <i className="fa-solid fa-square-pen fa-lg"></i> Make today
          productive! Write down your important tasks.
        </p>
        <TodoForm />
        <div className="mx-2 sm:mx-auto px-4 py-2 mb-12 rounded-lg max-w-2xl bg-[#cedadf] shadow-xl dark:shadow-xl dark:bg-[#191D24] duration-200">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))
          ) : (
            <div className="text-center text-3xl p-14 font-light text-black dark:text-[#A6ADBA]">
              Conquer your day! Add your first To-Do.{" "}
            </div>
          )}
          {todos.length > 0 && (
            <div className="flex justify-end">
              <button
                className="btn border-[#d90429] bg-[#d90429] p-2 sm:px-3 hover:bg-[#a4161a] hover:border-[#a4161a] disabled:text-[#8c929e] hover:text-white text-xs sm:text-sm  my-4 mx-2 text-white"
                onClick={() => clearSelected()}
                disabled={!disabled}
              >
                <i className="fa-solid fa-broom text-sm sm:text-lg"></i>
                CLEAR SELECTED
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </TodoProvider>
  );
}

export default App;
