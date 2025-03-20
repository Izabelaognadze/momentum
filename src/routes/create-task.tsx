import { createFileRoute } from "@tanstack/react-router";
import { useCreateTaskForm } from "../hooks/use-create-task-form";
import { InputButton } from "../components/input-button";

export const Route = createFileRoute("/create-task")({
  component: CreateTask,
});

function CreateTask() {
  const { onSubmit } = useCreateTaskForm();

  return (
    <div className="FiraGO px-[var(--padding-x)]">
      <h1 className="text-[34px] font-semibold leading-none tracking-normal text-left text-[#212529] mt-10 mb-[25px]">
        შექმენი ახალი დავალება
      </h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-[1684px] h-[958px] 
  p-[65px_368px_216px_55px] 
   border-[0.3px] border-[#ddd2ff] 
  bg-[rgba(251,249,255,0.65)] 
  rounded-[4px]"
      >
        <InputButton label="სათაური" required fieldName="name" errorMessages />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
