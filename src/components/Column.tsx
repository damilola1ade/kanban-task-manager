import { useAppDispatch } from "@/hooks";
import { updateTaskStage } from "@/redux/slice";
import { ColumnProps, TaskCardProps } from "@/types";
import { useState, DragEvent } from "react";
import { DropIndicator } from "./DropIndicator";
import { TaskCard } from "./TaskCard";

export const Column = ({ title, headingColor, tasks, stage }: ColumnProps) => {
  const [active, setActive] = useState(false);

  const dispatch = useAppDispatch();

  const handleDragStart = (
    e: DragEvent<HTMLDivElement>,
    task: TaskCardProps
  ) => {
    if (task.id) {
      e.dataTransfer.setData("taskId", task.id);
    }
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");

    if (!taskId) return;

    dispatch(updateTaskStage({ id: taskId, stage }));

    setActive(false);
    clearHighlights();
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (
    e: DragEvent<HTMLDivElement>,
    indicators: HTMLElement[]
  ) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(`[data-column="${stage}"]`)
    ) as unknown as HTMLElement[];
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = tasks.filter((c) => c.stage === stage);

  return (
    <div className="w-40 md:w-80 shrink-0">
      <div className="lg:fixed bg-black w-40 md:w-80 flex items-center gap-4 rounded-md p-4">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-white font-bold">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mt-20 h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return (
            <TaskCard key={c.id} {...c} handleDragStart={handleDragStart} />
          );
        })}
        <DropIndicator beforeId={""} stage={stage} />
      </div>
    </div>
  );
};
