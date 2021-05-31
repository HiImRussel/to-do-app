import { useState, useEffect } from "react";

import "../css/Form.css";

const CreateNewTask = () => {
  const [taskNameVelue, setTaskNameValue] = useState("");
  const [taskDescriptionVelue, setTaskDescriptionValue] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [tasks, setTasks] = useState();
  const handleChange = (e) => {
    switch (e.target.name) {
      case "task-name":
        setTaskNameValue(e.target.value);
        break;
      case "task-description":
        setTaskDescriptionValue(e.target.value);
        break;
      case "important":
        setIsImportant((prevValue) => !prevValue);
        break;
      case "date":
        setTaskDate(e.target.value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 999999999999),
      name: taskNameVelue,
      description: taskDescriptionVelue,
      date: taskDate,
      important: isImportant,
    };
    const tasks_to_save = [...tasks, JSON.stringify(newTask)];

    document.cookie = JSON.stringify(tasks_to_save);
    setTasks((prevValue) => [...prevValue, newTask]);
  };

  useEffect(() => {
    if (document.cookie.length > 0) {
      setTasks(JSON.parse(document.cookie));
    }
  }, []);
  return (
    <div className="tasks-bg">
      <h3>Create new task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task-name"
          placeholder="Task name"
          value={taskNameVelue}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="task-description"
          placeholder="Task description"
          value={taskDescriptionVelue}
          onChange={handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="important"
          checked={isImportant}
          onChange={handleChange}
        />
        <label>Is important?</label>
        <input
          type="date"
          name="date"
          value={taskDate}
          onChange={handleChange}
        />
        <br />
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default CreateNewTask;
