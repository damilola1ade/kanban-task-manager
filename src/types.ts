/* eslint-disable @typescript-eslint/no-explicit-any */

export type TaskStages = "pending" | "in progress" | "completed";

export type TaskCardProps = {
  id: any;
  title: string;
  description?: string;
  stage: TaskStages;
  handleDragStart?: any;
};

export type DropIndicatorProps = {
  beforeId: any;
  stage: TaskStages;
};
