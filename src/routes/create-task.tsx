import { createFileRoute } from "@tanstack/react-router";
import { useCreateTaskForm } from "../hooks/use-create-task-form";
import { InputButton } from "../components/input-button";
import { ListBoxElement } from "../components/list-box-element";
import { SelectButton } from "../components/select-button";
import { TextAreaForDescription } from "../components/text-area-for-description";
import { DatePickerField } from "../components/date-picker";
import { PATHS } from "../constants";
import {
  departmentApiService,
  employeeApiService,
  statusApiService,
} from "../services/instances";
import { useSuspenseQueries } from "@tanstack/react-query";

export const Route = createFileRoute("/create-task")({
  component: CreateTask,
});

function CreateTask() {
  const statusesQuery = {
    queryKey: [PATHS.STATUSES],
    queryFn: () => statusApiService.getStatuses(),
  };

  const employeesQuery = {
    queryKey: [PATHS.EMPLOYEES],
    queryFn: () => employeeApiService.getEmployees(),
  };

  const departmentsQuery = {
    queryKey: [PATHS.DEPARTMENTS],
    queryFn: () => departmentApiService.getDepartments(),
  };

  const results = useSuspenseQueries({
    queries: [statusesQuery, employeesQuery, departmentsQuery],
  });

  const {
    onSubmit,
    registerField,
    isNameMaxLengthError,
    isNameMinLengthError,
    isDescriptionMinLengthError,
    isDescriptionMaxLengthError,
  } = useCreateTaskForm();

  const handleSubmit = (e: any) => {
    return onSubmit(e);
  };

  return (
    <div className="FiraGO px-[var(--padding-x)]">
      <h1 className="text-[34px] font-semibold leading-none tracking-normal text-left text-[#212529] mt-10 mb-[25px]">
        შექმენი ახალი დავალება
      </h1>
      <form
        onSubmit={handleSubmit}
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
            <SelectButton labelName="სტატუსი" data={results[0].data} />
          </div>
        </div>

        <div className="flex gap-[87px] flex-col w-[550px]">
          <SelectButton labelName="დეპარტამენტი" data={results[2].data} />
          <SelectButton
            labelName=" პასუხისმგებელი თანამშრომელი"
            data={results[1].data}
          />
          <DatePickerField registerProps={registerField("due_date")} />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[208px] cursor-pointer h-[42px] flex flex-row justify-center items-center gap-[4px] px-[20px] py-[10px] rounded-[5px] text-white bg-[#8338ec] hover:bg-[#B588F4]"
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
