import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { TaskPage } from "../task-page/task-page";
import "../App.css";

const queryClient = new QueryClient();

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskPage />
    </QueryClientProvider>
  );
}
