import { AddTaskButton } from "./components/AddTaskButton";
import { Column } from "./components/Column";
import "./App.css";
import { useAppSelector } from "./hooks";

export const App = () => {
  const tasks = useAppSelector((state) => state.tasks);

  console.log(tasks);

  return (
    <div>
      <AddTaskButton />
      <div className="mt-10 flex h-[480px] overflow-y-auto gap-3">
        <Column
          title="Pending"
          stage="pending"
          headingColor="text-yellow-500"
          tasks={tasks}
        />
        <Column
          title="In progress"
          stage="in progress"
          headingColor="text-blue-500"
          tasks={tasks}
        />
        <Column
          title="Completed"
          stage="completed"
          headingColor="text-emerald-500"
          tasks={tasks}
        />
      </div>
    </div>
  );
};
