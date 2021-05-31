import Task from "./Task";
import "../css/TaskList.css";

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  const display_tasks = tasks.map((task) => {
    if (task.status === "new") {
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
      <h3>Task list</h3>
      {display_tasks}
    </div>
  );
};

export default TaskList;
