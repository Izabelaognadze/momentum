import { createFileRoute } from "@tanstack/react-router";
import { useCreateTaskForm } from "../hooks/use-create-task-form";
import { InputButton } from "../components/input-button";
import { ListBoxElement } from "../components/list-box-element";
import { SelectButton } from "../components/select-button";
import { TextAreaForDescription } from "../components/text-area-for-description";
import { DatePickerField } from "../components/date-picker";

export const Route = createFileRoute("/create-task")({
  component: CreateTask,
});

function CreateTask() {
  const {
    onSubmit,
    registerField,
    isNameMaxLengthError,
    isNameMinLengthError,
    isDescriptionMinLengthError,
    isDescriptionMaxLengthError,
  } = useCreateTaskForm();

  return (
    <div className="FiraGO px-[var(--padding-x)]">
      <h1 className="text-[34px] font-semibold leading-none tracking-normal text-left text-[#212529] mt-10 mb-[25px]">
        შექმენი ახალი დავალება
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted!");
          onSubmit();
        }}
        className="flex justify-between  w-full p-[65px_368px_216px_55px] border-[0.3px] border-[#ddd2ff] bg-[rgba(251,249,255,0.65)] rounded-[4px] mb-12"
      >
        <div className="flex gap-[87px] flex-col w-[550px]">
          <InputButton
            required
            registerProps={registerField("name")}
            isNameMaxLengthError={isNameMaxLengthError}
            isNameMinLengthError={isNameMinLengthError}
          />
          <TextAreaForDescription
            registerProps={registerField("description")}
            isDescriptionMaxLengthError={isDescriptionMaxLengthError}
            isDescriptionMinLengthError={isDescriptionMinLengthError}
          />
          <div className="flex gap-8 justify-between w-full">
            <ListBoxElement registerProps={registerField("priority")} />
            <SelectButton labelName="სტატუსი" />
          </div>
        </div>

        <div className="flex gap-[87px] flex-col w-[550px]">
          <SelectButton labelName="დეპარტამენტი" />
          <SelectButton labelName="  პასუხისმგებელი თანამშრომელი" />
          <DatePickerField registerProps={registerField("due_date")} />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[208px] h-[42px] flex flex-row justify-center items-center gap-[4px] px-[20px] py-[10px] rounded-[5px] text-white bg-[#8338ec] hover:bg-[#B588F4]"
            >
              დავალების შექმნა
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
