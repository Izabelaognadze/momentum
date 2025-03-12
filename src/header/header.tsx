import { CreateTask } from "./create-task";
import { CreateUser } from "./create-user";
import { Logo } from "./logo";

export function Header() {
	return (
		<div className="flex justify-between items-center py-[31px] px-[var(--padding-x)]">
			<Logo />
			<div className="flex gap-10">
				<CreateUser />
				<CreateTask />
			</div>
		</div>
	);
}
