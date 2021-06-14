import { useState } from "react";

import "../css/Form.css";

const CreateNewTask = ({ handler }) => {
  const [taskNameVelue, setTaskNameValue] = useState("");
  const [taskNameError, setTaskNameError] = useState(false);

  const [taskDescriptionVelue, setTaskDescriptionValue] = useState("");
  const [taskDescriptionError, setTaskDescriptionError] = useState(false);

  const [taskDate, setTaskDate] = useState("");
  const [taskDateError, setTaskDateError] = useState(false);

  const [isImportant, setIsImportant] = useState(false);

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
    let validationError = false;
    //name validation
    if (taskNameVelue.length === 0) {
      setTaskNameError(true);
      validationError = true;
    } else {
      setTaskNameError(false);
    }

    //description validate
    if (taskDescriptionVelue.length === 0) {
      setTaskDescriptionError(true);
      validationError = true;
    } else {
      setTaskDescriptionError(false);
    }

    //date validation
    if (taskDate.length === 0) {
      setTaskDateError(true);
      validationError = true;
    } else {
      setTaskDateError(false);
    }

    if (validationError === false) {
      handler(taskNameVelue, taskDescriptionVelue, taskDate, isImportant);
    }
  };

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
        {taskNameError && (
          <span style={{ color: "white" }}>This field is require</span>
        )}
        <br />
        <input
          type="text"
          name="task-description"
          placeholder="Task description"
          value={taskDescriptionVelue}
          onChange={handleChange}
        />
        {taskDescriptionError && (
          <span style={{ color: "white" }}>This field is require</span>
        )}
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
        {taskDateError && (
          <>
            <br />
            <span style={{ color: "white" }}>Please set date</span>
          </>
        )}
        <br />
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default CreateNewTask;
