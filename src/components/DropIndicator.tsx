import { DropIndicatorProps } from "@/types";

export const DropIndicator = ({ beforeId, stage }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={stage}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};
