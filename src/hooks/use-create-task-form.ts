import { useForm } from "react-hook-form";
import { useCallback, useEffect, useMemo } from "react";
import { taskApiService } from "../services/instances";
import { CreateTask } from "../types/task";

export const useCreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, dirtyFields },
  } = useForm<CreateTask>({ mode: "onChange" });

  const registerField = useCallback(
    (fieldName: string) =>
      register(fieldName as keyof CreateTask, {
        required: true,
        minLength: 2,
        maxLength: 255,
      }),
    [register]
  );

  const createTask = useCallback(
    (data: CreateTask) => {
      try {
        taskApiService.postTask(data);
        reset();
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
    [reset]
  );

  useEffect(() => {
    console.log(errors);
  });

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

  const isDescriptionTouched = dirtyFields.description;
  const isDescriptionMinLengthError =
    isSubmitted || isDescriptionTouched
      ? errors.name?.type === "minLength" || errors.name?.type === "required"
      : undefined;
  const isDescriptionMaxLengthError =
    isSubmitted || isDescriptionTouched
      ? errors.name?.type === "maxLength" || errors.name?.type === "required"
      : undefined;

  return {
    registerField,
    onSubmit,
    isNameMinLengthError,
    isNameMaxLengthError,
    isDescriptionMinLengthError,
    isDescriptionMaxLengthError,
  };
};
