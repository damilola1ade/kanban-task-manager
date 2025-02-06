import { TaskCardProps } from "@/types";
import { motion } from "framer-motion";
import { DeleteTaskButton } from "./DeleteTaskButton";
import { DropIndicator } from "./DropIndicator";
import { EditTaskButton } from "./EditTaskButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";

export const TaskCard = ({
  title,
  id,
  description,
  stage,
  handleDragStart,
}: TaskCardProps) => {
  return (
    <div>
      <DropIndicator beforeId={id} stage={stage} />
      <motion.div
        layout
        layoutId={id.toString()}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { id })}
        className="cursor-grab active:cursor-grabbing"
      >
        <Card className="w-40 md:w-full">
          <CardHeader className="text-left truncate">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col lg:flex-row justify-between">
            <EditTaskButton
              id={id}
              title={title}
              description={description}
              stage={stage}
            />
            <DeleteTaskButton id={id} />
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};
