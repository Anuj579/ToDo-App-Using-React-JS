import React, { useState } from "react";
import { useTodo } from "../../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { editTodo, removeTodo, markTodo } = useTodo();

  const updateTodo = () => {
    editTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const selectTodo = () => {
    markTodo(todo.id);
  };

  return (
    <>
      <div
        className={`flex items-center justify-between md:gap-5 gap-2 px-2 rounded-lg transition-all ${
          todo.completed ? "bg-green-800" : "bg-inherit"
        }`}
      >
        <div className="flex gap-2 items-center basis-4/5 ">
          <input
            type="checkbox"
            className="checkbox border-[#6419E6] checked:border-[#6419E6] focus:outline-none checked:bg-[#6419E6] [--chkbg:#6419E6] [--chkfg:white] cursor-pointer rounded-lg checkbox-sm sm:checkbox-md"
            checked={todo.completed}
            onChange={selectTodo}
          />
          <input
            type="text"
            className={`input input-bordered w-full max-w-full border-[#6419E6] focus:border-[#6419E6] input-sm sm:input-md dark:text-white bg-inherit my-6 read-only:border-none focus:outline-none font-bold sm:text-lg read-only:bg-inherit dark:read-only:text-white read-only:cursor-default ${
              todo.completed ? "read-only:text-white" : "text-black"
            }`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            disabled={todo.completed}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (todo.completed) return;
              if (isTodoEditable) {
                updateTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            className="btn btn-square bg-[#6419E6] text-white hover:bg-[#5014B8] border-[#5014B8] hover:border-[#5014B8] btn-sm sm:btn-md sm:text-lg"
            disabled={todo.completed}
          >
            {isTodoEditable ? (
              <i className="fa-regular fa-floppy-disk fa-lg text-white"></i>
            ) : (
              <i className="fa-regular fa-pen-to-square fa-lg text-white"></i>
            )}
          </button>
          <button
            onClick={() => removeTodo(todo.id)}
            className="btn btn-square btn-sm sm:btn-md sm:text-lg border-[#d90429] bg-[#d90429] text-white hover:bg-[#a4161a] hover:border-[#a4161a]  focus:border-[#d90429]"
          >
            <i className="fa-solid fa-xmark text-lg sm:text-2xl   "></i>
          </button>
        </div>
      </div>
      <div className="my-2 border-t border-[#6419e68a] "></div>
    </>
  );
}

export default TodoItem;
