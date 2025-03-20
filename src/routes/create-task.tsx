import { createFileRoute } from "@tanstack/react-router";
import { useCreateTaskForm } from "../hooks/use-create-task-form";
import { InputButton } from "../components/input-button";

export const Route = createFileRoute("/create-task")({
  component: CreateTask,
});

function CreateTask() {
  const {
    registerField,
    onSubmit,
    isNameMinLengthError,
    isNameMaxLengthError,
  } = useCreateTaskForm();

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
        <InputButton label="სათაური" required />
        <label className="text-[16px] font-normal leading-normal tracking-normal text-left text-[#343a40] mt-1">
          სათაური
        </label>
        <input
          type="text"
          {...registerField("name")}
          className="  w-[550px] h-[45px] flex items-center justify-start ap-2.5 px-4 
  border border-[#dee2e6] rounded 
  bg-white"
        />
        <p
          className="text-[10px] font-normal leading-normal tracking-normal text-left"
          style={{
            color:
              isNameMinLengthError === true
                ? "red"
                : isNameMinLengthError === false
                  ? "green"
                  : "#6c757d",
          }}
        >
          მინიმუმ 2 სიმბოლო
        </p>
        <p
          className="text-[10px] font-normal leading-normal tracking-normal text-left text-[#6c757d]"
          style={{
            color:
              isNameMaxLengthError === true
                ? "red"
                : isNameMaxLengthError === false
                  ? "green"
                  : "#6c757d",
          }}
        >
          მაქსიმუმ 255 სიმბოლო
        </p>

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
