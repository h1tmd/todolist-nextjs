"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to add the task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // function to mark the task complete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // function to delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="m-40">
      <h1 className="text-3xl font-bold text-center">To-Do List</h1>
      <div className="w-full max-w-md flex justify-center">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          className="border border-black w-auto p-3"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="ml-3 bg-blue-500 p-2 rounded-md text-white"
        >
          Add Task
        </button>
      </div>

      <ul className="divide-y divide-gray-100">
        {tasks.map((t) => (
          <li className="flex justify-between gap-x-6 py-5" key={t.id}>
            <div className="flex min-w-0 gap-x-4 items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={t.completed}
                onChange={() => toggleTaskCompletion(t.id)}
              />
              <span
                className={`${
                  t.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {t.text}
              </span>
            </div>
            <button
              className="ml-3 bg-red-500 p-2 rounded-md text-white"
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
