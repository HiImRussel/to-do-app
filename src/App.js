import CreateNewTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import "./css/App.css";

const App = () => {
  return (
    <main>
      <CreateNewTask />
      <TaskList />
    </main>
  );
};

export default App;
