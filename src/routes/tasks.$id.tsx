import { createFileRoute } from "@tanstack/react-router";
import { Task } from "../types/task";
import { PATHS } from "../constants";
import { taskApiService } from "../services/instances";
import { useQuery } from "@tanstack/react-query";
import { PriorityButton } from "../components/priority-button";
import { Departments } from "../components/departments";
import { TaskStatusDropdown } from "../components/task-status-dropdown";

export const Route = createFileRoute("/tasks/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id: idString } = Route.useParams();
  const id = Number(idString);
  const {
    data: task,
    isLoading,
    isError,
  } = useQuery<Task>({
    queryKey: [PATHS.TASKS, id],
    queryFn: async () => {
      const data = await taskApiService.getTask(id);
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !task) return <p>Error loading task</p>;

  return (
    <div className="flex justify-between FiraGO px-[var(--padding-x)] mt-10">
      <div className="">
        <div className="flex gap-[18px] scale-120 origin-left">
          <PriorityButton id={task.priority.id} />
          <Departments id={task.department.id} />
        </div>
        <h1 className="flex pt-4 pb-[10px] flex-grow-0 font-inter text-[34px] font-semibold tracking-normal leading-none text-left text-[var(--primaryDark)]">
          {task.name}
        </h1>
        <p className="flex-grow-0 pb-[63px] text-[18px] font-normal leading-[1.5] tracking-normal text-left text-black">
          {task.description}
        </p>

        <div className="">
          <h3 className="text-[24px] font-medium leading-normal tracking-normal text-left text-[#2a2a2a]">
            დავალების დეტალები
          </h3>
          <TaskStatusDropdown task={task} />
        </div>
      </div>

      <div className="koments"></div>
    </div>
  );
}
