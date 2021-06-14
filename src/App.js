import { useState, useEffect } from "react";

import CreateNewTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import "./css/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (
    taskNameValue,
    taskDescriptionValue,
    taskDate,
    isImportant
  ) => {
    const newTask = {
      id: Math.floor(Math.random() * 999999999999),
      name: taskNameValue,
      description: taskDescriptionValue,
      date: taskDate,
      important: isImportant,
      status: "new",
    };
    const tasks_to_save = [...tasks, newTask];

    document.cookie = `data=${JSON.stringify(
      tasks_to_save
    )}; expires=Thu, 18 Dec 3099 12:00:00 UTC`;
    setTasks((prevValue) => [...prevValue, newTask]);
  };

  const deleteTask = (id) => {
    const new_tasks_list = tasks.filter((task) => {
      if (task.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTasks(new_tasks_list);
    document.cookie = `data=${JSON.stringify(
      new_tasks_list
    )}; expires=Thu, 18 Dec 3099 12:00:00 UTC`;
  };

  const completeTask = (id) => {
    const newTaskList = tasks.map((task) => {
      if (task.id === id) {
        const newTask = {
          id: task.id,
          name: task.name,
          description: task.description,
          date: task.date,
          important: task.important,
          status: "complete",
        };
        return newTask;
      } else {
        return task;
      }
    });
    setTasks(newTaskList);
    document.cookie = `data=${JSON.stringify(
      newTaskList
    )}; expires=Thu, 18 Dec 3099 12:00:00 UTC`;
  };

  useEffect(() => {
    if (document.cookie.length > 0) {
      const taskskData = JSON.parse(document.cookie.split("=")[1]);
      console.log(document.cookie.split("=")[1]);
      setTasks(taskskData);
    }
  }, []);

  return (
    <main>
      <CreateNewTask handler={handleAddTask} />
      {tasks !== undefined && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      )}
    </main>
  );
};

export default App;
