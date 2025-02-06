import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Simple task",
    description: "Simple descriptiom",
    stage: "pending",
  },
];

let nextId = 1;

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: nextId++, ...action.payload });
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTaskStage: (state, action) => {
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
