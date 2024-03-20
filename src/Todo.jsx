import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index, updatedTask) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div>
        <h1 className="pt-10 text-xl uppercase font-bold">
          Xero<span className="text-orange-500">Todo</span>
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="write your next task"
            value={newTask}
            onChange={handleInputChange}
            className="bg-[#1E1E1E] outline-none px-4 py-2 mr-3 rounded-xl placeholder:text-[#E8D7B9] placeholder:opacity-50"
          />
          <button
            className="bg-orange-500 rounded-full px-4 py-1 text-3xl text-black font-bold"
            onClick={addTask}
          >
            +
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-[#1E1E1E] w-full p-4 rounded-xl border border-orange-200 flex  "
            >
              <span className="flex-1">{task}</span>
              <button
                className="mr-1"
                onClick={() => editTask(index, prompt("Enter new task:", task))}
              >
                <TbEdit size={25} />
              </button>
              <button onClick={() => deleteTask(index)}>
                <FaTrash size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
