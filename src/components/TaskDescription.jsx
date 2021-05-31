import "../css/TaskDescription.css";

const TaskDescription = ({ handler, description }) => {
  return (
    <section className="task-description">
      <button onClick={handler}>Close</button>
      <p>{description}</p>
    </section>
  );
};

export default TaskDescription;
