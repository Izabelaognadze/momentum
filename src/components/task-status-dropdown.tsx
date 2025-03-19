import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { statusApiService, taskApiService } from "../services/instances";
import { PATHS } from "../constants";
import { Task } from "../types/task";
import { Status } from "../types/status";

interface TaskStatusDropdownProps {
  task: Task;
}

export function TaskStatusDropdown({ task }: TaskStatusDropdownProps) {
  const queryClient = useQueryClient();

  const {
    data: statuses,
    isLoading,
    error,
  } = useQuery({
    queryKey: [PATHS.STATUSES],
    queryFn: () => {
      return statusApiService.getStatuses();
    },
  });

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: Status }) =>
      taskApiService.changeTaskStatus(id, status),
    onSuccess: (data) => {
      queryClient.setQueryData(["tasks"], (oldData: Task[] | undefined) => {
        return oldData?.map((task) =>
          task.id === task.id ? { ...task, status: data.status } : task
        );
      });
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatusId = event.target.value;
    if (newStatusId) {
      const selectedStatus = statuses?.find(
        (status) => status.id === parseInt(newStatusId, 10)
      );
      if (selectedStatus) {
        mutation.mutate({ id: task.id, status: selectedStatus });
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading statuses</div>;
  }

  return (
    <select className="border p-2 rounded-md" onChange={handleChange}>
      <option value="">მზად ტესტირებისთვის</option>
      {statuses?.map((status: Status) => (
        <option key={status.id} value={status.id}>
          {status.name}
        </option>
      ))}
    </select>
  );
}
