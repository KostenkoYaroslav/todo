import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { content: newTask }]);
      setNewTask("");
    }
  }

  function deleteTask() {
    setTasks(tasks.filter((a) => a.id !== tasks.id));
  }

  function editTask() {}

  return (
    <main className="flex flex-col items-center justify-center">
      <div>
        <h1 className="pt-10 text-xl uppercase font-bold">
          Xero<span className="text-orange-500">Todo</span>
        </h1>
        <form className="flex items-center" onSubmit={addTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="write your next task"
            className="bg-[#1E1E1E] outline-none px-4 py-2 mr-3 rounded-xl placeholder:text-[#E8D7B9] placeholder:opacity-50"
          />
          <button className="bg-orange-500 rounded-full px-4 py-1 text-3xl text-black font-bold">
            +
          </button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li
              key={task}
              className="bg-[#1E1E1E] w-full p-4 rounded-xl border border-orange-200 flex  "
            >
              <button className=" rounded-full border border-orange-500 w-6 h-6"></button>
              <span className="flex-1">{task.content}</span>
              <button className="mr-1">
                <TbEdit size={25} />
              </button>
              <button onClick={deleteTask}>
                <FaTrash size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
