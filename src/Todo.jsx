import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { IoExit } from "react-icons/io5";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [countTask, setCountTask] = useState(0);
  const [countMarkingTask, setCountMarkingTask] = useState(0);

  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length, title: newTask, seen: false }]);
      setNewTask("");
      setCountTask(countTask + 1);
    }
  }

  function markingTask(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, seen: !task.seen };
        } else {
          return task;
        }
      })
    );

    if (tasks.find((task) => task.id === taskId).seen) {
      setCountMarkingTask(countMarkingTask - 1);
    } else {
      setCountMarkingTask(countMarkingTask + 1);
    }
  }

  function editTask(index, updatedTask) {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = updatedTask;
    setTasks(updatedTasks);
  }

  function deleteTask(taskId, seen) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setCountTask(countTask - 1);
    if (seen) {
      setCountMarkingTask(countMarkingTask - 1);
    }
  }

  return (
    <main className="flex flex-col mx-32 max-sm:mx-0">
      <div className="flex justify-between py-10 items-center max-sm:justify-center">
        <h1 className="text-xl uppercase font-bold">
          Xero<span className="text-orange-500">Todo</span>
        </h1>
        <button className="hover:text-orange-500 duration-700 max-sm:hidden">
          <IoExit size={25} />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className="border-[0.1px] border-orange-200 rounded-3xl flex justify-between p-10 items-center max-sm:p-5">
          <div className="pl-5 mr-10">
            <h1 className="font-bold text-3xl max-sm:text-2xl">Todo Done</h1>
            <p className="tracking-widest text-xl max-sm:text-lg">keep it up</p>
          </div>

          <div className="bg-orange-500 text-black font-bold text-2xl rounded-full p-7 max-sm:p-5">
            <span>
              {countMarkingTask}/{countTask}
            </span>
          </div>
        </div>
        <form className="flex items-center mt-7 mb-7" onSubmit={addTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="write your next task"
            className="bg-[#1E1E1E] outline-none pl-4 pr-16 py-2 mr-3 rounded-2xl placeholder:text-[#E8D7B9] placeholder:opacity-50"
          />
          <button className="bg-orange-500 rounded-full px-5 py-2 text-3xl text-black font-bold">
            +
          </button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-[#1E1E1E] w-full p-4 rounded-xl border-[0.1px] border-orange-200 flex mb-5"
            >
              <button
                className={`rounded-full border bg-green-600  w-6 h-6 ${
                  task.seen
                    ? "bg-opacity-100 border-green-600"
                    : "bg-opacity-0 border-orange-500"
                }`}
                onClick={() => markingTask(task.id)}
              ></button>
              <span
                className={`pl-4 pr-40 text-xl font-bold flex-1 max-sm:pr-20 ${
                  task.seen ? "line-through" : "no-underline"
                }`}
              >
                {task.title}
              </span>
              <button
                className="mr-1"
                onClick={() => {
                  editTask(index, prompt("Enter New Task", task.title));
                }}
              >
                <TiEdit size={25} />
              </button>
              <button onClick={() => deleteTask(task.id, task.seen)}>
                <FaTrash size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
