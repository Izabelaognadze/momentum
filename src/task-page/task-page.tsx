import { Tasks } from "./tasks";

export function TaskPage() {
	return (
		<div className="FiraGO px-[var(--padding-x)]">
			<h1 className="text-[34px] font-semibold text-left text-[#212529] pt-10 pb-[52px]">
				დავალებების გვერდი
			</h1>
			<Tasks />
		</div>
	);
}
