import { useState } from "react";

import TaskDescription from "./TaskDescription";
import "../css/Task.css";

const Task = ({
  id,
  name,
  important,
  description,
  deleteTask,
  completeTask,
}) => {
  const [isDescriptionVisable, setIsSecriptionVisable] = useState(false);
  const [displayDescription, setDescription] = useState("");

  const handleClick = (description_new) => {
    setIsSecriptionVisable((prevValue) => !prevValue);
    setDescription(description_new);
  };

  return (
    <>
      <div
        className="task"
        onClick={() => handleClick(description)}
        style={important ? { backgroundColor: "#F6E39C" } : {}}
      >
        <span>{name}</span>
        <div className="buttons">
          <svg
            onClick={() => completeTask(id)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12.5L11 15.5L16 9.5"
              stroke="#7FE37D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#7FE37D"
              stroke-width="2"
            />
          </svg>
          <svg
            onClick={() => deleteTask(id)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.064 8.31563C16.064 8.2125 15.9797 8.12813 15.8765 8.12813L14.3297 8.13516L12 10.9125L9.67263 8.1375L8.12341 8.13047C8.02029 8.13047 7.93591 8.2125 7.93591 8.31797C7.93591 8.3625 7.95232 8.40469 7.98044 8.43985L11.0297 12.0727L7.98044 15.7031C7.95212 15.7375 7.93641 15.7805 7.93591 15.825C7.93591 15.9281 8.02029 16.0125 8.12341 16.0125L9.67263 16.0055L12 13.2281L14.3273 16.0031L15.8742 16.0102C15.9773 16.0102 16.0617 15.9281 16.0617 15.8227C16.0617 15.7781 16.0453 15.7359 16.0172 15.7008L12.9726 12.0703L16.0219 8.4375C16.05 8.40469 16.064 8.36016 16.064 8.31563Z"
              fill="#DC2430"
            />
            <path
              d="M12 1.52344C6.20156 1.52344 1.5 6.225 1.5 12.0234C1.5 17.8219 6.20156 22.5234 12 22.5234C17.7984 22.5234 22.5 17.8219 22.5 12.0234C22.5 6.225 17.7984 1.52344 12 1.52344ZM12 20.7422C7.18594 20.7422 3.28125 16.8375 3.28125 12.0234C3.28125 7.20938 7.18594 3.30469 12 3.30469C16.8141 3.30469 20.7188 7.20938 20.7188 12.0234C20.7188 16.8375 16.8141 20.7422 12 20.7422Z"
              fill="#DC2430"
            />
          </svg>
        </div>
      </div>
      {isDescriptionVisable && (
        <TaskDescription
          handler={handleClick}
          description={displayDescription}
        />
      )}
    </>
  );
};

export default Task;
