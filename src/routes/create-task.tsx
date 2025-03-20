import { createFileRoute } from "@tanstack/react-router";
import { useCreateTaskForm } from "../hooks/use-create-task-form";
import { InputButton } from "../components/input-button";
import { ListBoxElement } from "../components/list-box-element";

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
        className="flex flex-col w-full p-[65px_368px_216px_55px] border-[0.3px] border-[#ddd2ff] bg-[rgba(251,249,255,0.65)] rounded-[4px]"
      >
        <div className="flex gap-[87px] flex-col w-[550px]">
          <InputButton
            label="სათაური"
            required
            fieldName="name"
            errorMessages
          />
          <InputButton
            label="აღწერა"
            fieldName="description"
            inputHeight="133px"
            errorMessages
          />
          <ListBoxElement />
          {/* <Listbox
            name="priority"
            aria-label="Project priority"
            className="flex flex-row justify-start items-center gap-[6px] p-[14px] rounded-[5px] border border-[#dee2e6] bg-white"
          >
            <label className="labelStyle">priority</label>
            {priorities && priorities.length > 0 ? (
              priorities.map((priority) => (
                <>
                  <option
                    key={priority.id}
                    value={priority.id}
                    className="text-[14px] font-light leading-normal tracking-normal text-left text-[#0d0f10]"
                  >
                    <img
                      src={priority.icon}
                      alt={priority.name}
                      className="min-w-[20px] mr-[6px]"
                    />
                    {priority.name}
                  </option>
                </>
              ))
            ) : (
              <option disabled>No priorities available</option>
            )}
          </Listbox> */}
        </div>
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
