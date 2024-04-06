import React, { useState } from "react";
import { useTodo } from "../../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add}>
      <div className="text-center max-w-2xl mx-2 mb-8 sm:mx-auto flex">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={todo}
          className="input input-bordered text-sm sm:text-lg border-[#6419E6] focus:outline-[#6419E6] focus:border-[#6419E6] w-full text-black bg-white"
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <button type="submit" className="btn bg-[#6419E6] text-white hover:bg-[#5014B8] border-[#5014B8] hover:border-[#5014B8] ms-2">
          ADD
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
