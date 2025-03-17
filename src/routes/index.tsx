import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import { Tasks } from "../components/tasks";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="FiraGO px-[var(--padding-x)]">
      <h1 className="text-[34px] font-semibold text-left text-[var(--primaryDark)] pt-10 pb-[52px]">
        დავალებების გვერდი
      </h1>
      <Tasks />
    </div>
  );
}
