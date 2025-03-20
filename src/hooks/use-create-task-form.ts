import { useForm } from "react-hook-form";
import { useCallback, useMemo } from "react";

interface CreateTaskForm {
  name: string;
  description: string;
  due_date: Date;
  department: string;
  employee: string;
  status: string;
  priority: string;
}
export const useCreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, dirtyFields },
  } = useForm<CreateTaskForm>({ mode: "onChange" });

  const registerField = useCallback(
    (fieldName: keyof CreateTaskForm) =>
      register(fieldName, {
        required: true,
        minLength: 2,
        maxLength: 255,
      }),
    [register]
  );

  const createTask = useCallback(
    (data: CreateTaskForm) => {
      try {
        console.log(data);
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
