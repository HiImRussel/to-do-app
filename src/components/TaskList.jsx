import { useState } from "react";

import Task from "./Task";
import "../css/TaskList.css";

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  const [filter, setFilter] = useState("new");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const display_tasks = tasks.map((task) => {
    if (task.status === filter) {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          important={task.important}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      );
    }
  });
  return (
    <div className="tasks-list">
      <div id="options">
        <h3>Task list</h3>
        <select onChange={handleChange}>
          <option value="new">New</option>
          <option value="complete">Completed</option>
        </select>
      </div>
      {display_tasks}
    </div>
  );
};

export default TaskList;
