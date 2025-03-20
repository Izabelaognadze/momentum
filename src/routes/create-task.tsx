import { createFileRoute } from "@tanstack/react-router";
import { useCreateTaskForm } from "../hooks/use-create-task-form";
import { InputButton } from "../components/input-button";
import { ListBoxElement } from "../components/list-box-element";
import { SelectButton } from "../components/select-button";

export const Route = createFileRoute("/create-task")({
  component: CreateTask,
});

function CreateTask() {
  const {
    onSubmit,
    registerField,
    isNameMaxLengthError,
    isNameMinLengthError,
  } = useCreateTaskForm();

  return (
    <div className="FiraGO px-[var(--padding-x)]">
      <h1 className="text-[34px] font-semibold leading-none tracking-normal text-left text-[#212529] mt-10 mb-[25px]">
        შექმენი ახალი დავალება
      </h1>
      <form
        onSubmit={onSubmit}
        className="flex justify-between  w-full p-[65px_368px_216px_55px] border-[0.3px] border-[#ddd2ff] bg-[rgba(251,249,255,0.65)] rounded-[4px] mb-12"
      >
        <div className="flex gap-[87px] flex-col w-[550px]">
          <InputButton
            required
            registerProps={registerField("name")}
            isNameMaxLengthError={isNameMaxLengthError}
            isNameMinLengthError={isNameMinLengthError}
          />
          {/* <InputButton
            label="აღწერა"
            registerProps={registerField("description")}
            inputHeight="133px"
            errorMessages
          /> */}
          <div className="flex gap-8 justify-between">
            <ListBoxElement />
            <SelectButton labelName="სტატუსი" />
          </div>
        </div>

        <div className="flex gap-[87px] flex-col w-[550px]">
          <SelectButton labelName="დეპარტამენტი" />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
