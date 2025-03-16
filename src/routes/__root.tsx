import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Logo } from "../components/logo";
import { CreateTask } from "../components/create-task";
import { CreateUser } from "../components/create-user";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex justify-between items-center py-[31px] px-[var(--padding-x)]">
        <Link to="/">
          <Logo />
        </Link>{" "}
        <div className="flex gap-10">
          <CreateUser />
          <Link to="/create-task" className="[&.active]:font-bold">
            <CreateTask />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  ),
});
    