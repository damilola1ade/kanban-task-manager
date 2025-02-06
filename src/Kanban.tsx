import { useState, DragEvent } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "./hooks";
import { TaskStages } from "./types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EditTaskButton } from "./components/EditTaskButton";
import { DeleteTaskButton } from "./components/DeleteTaskButton";
import { updateTaskStage } from "./redux/slice";

export const CustomKanban = () => {
  return (
    <div className="h-screen w-full">
      <Board />
    </div>
  );
};

const Board = () => {
 

  return (
    <div className="flex h-full w-full gap-3">
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
  );
};
