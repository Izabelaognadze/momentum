import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import { Tasks } from "../components/tasks";

const queryClient = new QueryClient();

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="FiraGO px-[var(--padding-x)]">
        <h1 className="text-[34px] font-semibold text-left text-[#212529] pt-10 pb-[52px]">
          დავალებების გვერდი
        </h1>
        <Tasks />
      </div>
    </QueryClientProvider>
  );
}
