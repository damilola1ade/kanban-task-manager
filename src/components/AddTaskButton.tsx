import { useState } from "react";
import { useAppDispatch } from "@/hooks";
import { addTask } from "@/redux/slice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const AddTaskButton = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const isFormValid = !!title && !!description;

  const onSubmit = () => {
    if (!isFormValid) return;

    const newTask = {
      title,
      description,
      stage: "pending",
    };

    dispatch(addTask(newTask));

    // Clear inputs & close dialog
    setTitle("");
    setDescription("");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Add task</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Create task</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid w-full gap-4">
              <div className="flex flex-col gap-4">
                <Label htmlFor="title">Title</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Task title"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="description">Description</Label>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Task description"
                  required
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit} disabled={!isFormValid}>
            Add Task
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
