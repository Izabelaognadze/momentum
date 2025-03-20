import { useForm } from "react-hook-form";
import { useCallback, useMemo } from "react";
import { taskApiService } from "../services/instances";
import { CreateTaskForm } from "../types/task";

export const useCreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, dirtyFields },
  } = useForm<CreateTaskForm>({ mode: "onChange" });

  const registerField = useCallback(
    (fieldName: string) =>
      register(fieldName as keyof CreateTaskForm, {
        required: true,
        minLength: 2,
        maxLength: 255,
      }),
    [register]
  );

  const createTask = useCallback(
    (data: CreateTaskForm) => {
      try {
        taskApiService.postTask(data);
        reset();
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
    [reset]
  );

  const onSubmit = useMemo(
    () => handleSubmit(createTask),
    [createTask, handleSubmit]
  );
  const isNameTouched = dirtyFields.name;

  const isNameMinLengthError =
    isSubmitted || isNameTouched
      ? errors.name?.type === "minLength" || errors.name?.type === "required"
      : undefined;
  const isNameMaxLengthError =
    isSubmitted || isNameTouched
      ? errors.name?.type === "maxLength" || errors.name?.type === "required"
      : undefined;

  return {
    registerField,
    onSubmit,
    isNameMinLengthError,
    isNameMaxLengthError,
  };
};
