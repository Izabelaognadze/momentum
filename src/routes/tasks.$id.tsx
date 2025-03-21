import { createFileRoute } from "@tanstack/react-router";
import { PATHS } from "../constants";
import { commentsApiService, taskApiService } from "../services/instances";
import { useSuspenseQueries } from "@tanstack/react-query";
import { PriorityButton } from "../components/priority-button";
import { Departments } from "../components/departments";
import { TaskStatusDropdown } from "../components/task-status-dropdown";

export const Route = createFileRoute("/tasks/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id: idString } = Route.useParams();
  const id = Number(idString);
  const taskId = Number();

  const taskQuery = {
    queryKey: [PATHS.TASKS, id],
    queryFn: async () => {
      const data = await taskApiService.getTask(id);
      return data;
    },
  };

  const commentsQuery = {
    queryKey: [PATHS.COMMENTS, taskId],
    queryFn: () => commentsApiService.getComments(taskId),
  };

  const results = useSuspenseQueries({
    queries: [commentsQuery, taskQuery],
  });

  const task = results[1].data;

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

      {/* {comments
        .filter((comment) => comment.parent_id === null)
        .map((comment) => (
          <div key={comment.id} className="border p-2 my-2 rounded">
            <div className="flex items-center space-x-2">
              <img
                src={comment.author_avatar}
                alt={comment.author_nickname}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold">{comment.author_nickname}</span>
            </div>
            <p className="mt-1">{comment.text}</p>
            <button
              onClick={() => handleReply(comment.id)}
              className="text-blue-500 text-sm mt-1"
            >
              Reply
            </button>
            {replyingTo === comment.id && (
              <div className="mt-2">
                <textarea
                  className="w-full p-1 border rounded"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  onClick={handlePostComment}
                  className="mt-1 bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Post Reply
                </button>
              </div>
            )}
            <div className="ml-5 border-l pl-3">
              {comments
                .filter((subComment) => subComment.parent_id === comment.id)
                .map((subComment) => (
                  <div key={subComment.id} className="border p-2 my-2 rounded">
                    <div className="flex items-center space-x-2">
                      <img
                        src={subComment.author_avatar}
                        alt={subComment.author_nickname}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-bold">
                        {subComment.author_nickname}
                      </span>
                    </div>
                    <p className="mt-1">{subComment.text}</p>
                    <button
                      onClick={() => handleReply(subComment.id)}
                      className="text-blue-500 text-sm mt-1"
                    >
                      Reply
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))} */}
    </div>
  );
}
