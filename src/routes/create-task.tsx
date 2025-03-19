import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create-task")({
  component: CreateTask,
});

function CreateTask() {
  return (
    <div className="FiraGO px-[var(--padding-x)]">
      <h1 className="text-[34px] font-semibold leading-none tracking-normal text-left text-[#212529] mt-10 mb-[25px]">
        შექმენი ახალი დავალება
      </h1>
    </div>
  );
}
