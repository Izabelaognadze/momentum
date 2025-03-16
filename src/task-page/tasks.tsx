import { useQuery } from "@tanstack/react-query";
import { PATHS } from "../constants";
import { PriorityButton } from "../components/priority-button";
import { statusApiService, taskApiService } from "../services/instances";

export function Tasks() {
  const tasks = useQuery({
    queryKey: [PATHS.TASKS],
    queryFn: () => {
      return taskApiService.getTasks();
    },
  });

  const statuses = useQuery({
    queryKey: [PATHS.STATUSES],
    queryFn: () => {
      return statusApiService.getStatuses();
    },
  });

  if (!statuses || !tasks) return <div>Loading...</div>;

  const bgColors = ["#f7bc30", "#fb5607", "#ff006e", "#3a86ff"];

  return (
    <div>
      <div>line</div>
      <div className="flex gap-[52px] mt-[79px]">
        {statuses.data?.map((status, index) => (
          <div key={status.id} className="w-full">
            <div
              className="h-[54px] w-full flex items-center justify-center rounded-[10px] px-4 py-[15px] text-white"
              style={{ backgroundColor: bgColors[index] }}
            >
              {status.name}
            </div>

            <div className="mt-4 space-y-2">
              {tasks.data
                ?.filter((task) => task.status.id === status.id)
                .map((task) => (
                  <div
                    key={task.name}
                    className="bg-gray-100 p-4 rounded-lg shadow-md text-black"
                  >
                    <h3 className="font-semibold">{task.name}</h3>
                    <p className="text-sm">{task.description}</p>
                    <p className="text-xs text-gray-500">
                      Due Date: {task.due_date}
                    </p>
                    <PriorityButton id={task.priority.id} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
