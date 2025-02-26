import { TaskCardProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [] as TaskCardProps[],
  reducers: {
    addTask: (state, action: PayloadAction<TaskCardProps>) => {
      state.push(action.payload);
    },
    editTask: (
      state,
      action: PayloadAction<Pick<TaskCardProps, "id" | "title" | "description">>
    ) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTaskStage: (
      state,
      action: PayloadAction<Pick<TaskCardProps, "id" | "stage">>
    ) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.stage = action.payload.stage;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskStage } =
  taskSlice.actions;
export default taskSlice.reducer;
