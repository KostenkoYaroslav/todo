import React, { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {}

  function deleteTask() {}

  function editTask() {}

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="pt-10 text-xl uppercase font-bold">
        Xero<span className="text-orange-500">Todo</span>
      </h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="write your next task"
          className="bg-[#1E1E1E] outline-none px-4 py-2 mr-3 rounded-xl placeholder:text-[#E8D7B9] placeholder:opacity-50"
        />
        <button className="bg-orange-500 rounded-full px-4 py-1 text-3xl text-black font-bold">
          +
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
