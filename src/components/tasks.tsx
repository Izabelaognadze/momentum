import { useQuery } from "@tanstack/react-query";
import { PATHS } from "../constants";
import { PriorityButton } from "./priority-button";
import { statusApiService, taskApiService } from "../services/instances";
import { formatGeorgianDate } from "../functions/formatGeorgianDate";
import commentsIcon from "../assets/comments.svg";
import { Departments } from "./departments";
import { Link } from "@tanstack/react-router";

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

            <div className="flex flex-col gap-[30px] my-[30px] cursor-pointer">
              {tasks.data
                ?.filter((task) => task.status.id === status.id)
                .map((task) => (
                  <Link
                    to={"/tasks/$id"}
                    params={{ id: String(task.id) }}
                    key={task.id}
                    className="flex flex-col gap-7 p-5 rounded-[15px] border bg-white"
                    style={{ borderColor: bgColors[index] }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex gap-[10px]">
                        <PriorityButton id={task.priority.id} />
                        <Departments id={task.department.id} />
                      </div>
                      <p className="text-[12px] text-[var(--primaryDark)]">
                        {formatGeorgianDate(task.due_date)}
                      </p>
                    </div>

                    <div className="px-[10px] gap-3">
                      <p className="text-[var(--primaryDark)] FiraGOBold text-[15px]">
                        {task.name}
                      </p>
                      <p className="text-[var(--darkGray)] text-[14px] FiraGo">
                        {task.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <img
                        src={task.employee.avatar}
                        alt="avatar"
                        className="max-w-[31px] max-h-[31px]"
                      />
                      <div className="flex gap-[4px] text-[var(--primaryDark)] text-[14px]">
                        <img src={commentsIcon} alt="Comments" />
                        <p>{task.total_comments}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
