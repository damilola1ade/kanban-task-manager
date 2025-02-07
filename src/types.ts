/* eslint-disable @typescript-eslint/no-explicit-any */

export type TaskStages = "pending" | "in progress" | "completed";

export type TaskCardProps = {
  id: string;
  title: string;
  description?: string;
  stage: TaskStages;
  handleDragStart?: any;
};

export type DropIndicatorProps = {
  beforeId: string;
  stage: TaskStages;
};

export type ColumnProps = {
  title: string;
  headingColor: string;
  tasks: TaskCardProps[];
  stage: TaskStages;
};
