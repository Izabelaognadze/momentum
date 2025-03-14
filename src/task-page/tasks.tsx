import { useEffect, useState } from "react";
import Axios from "axios";

interface Status {
	id: number;
	name: string;
}

interface Task {
	name: string;
	description: string;
	due_date: string;
	status: {
		id: number;
		name: string;
	};
	employee_id: number;
	priority_id: number;
}

export function Tasks() {
	const [statuses, setStatuses] = useState<Status[]>();
	const [tasks, setTasks] = useState<Task[]>();

	const statusApiUrl = "https://momentum.redberryinternship.ge/api/statuses";
	const tasksApiUrl = "https://momentum.redberryinternship.ge/api/tasks";
	const token = "9e6b1a8e-0764-466b-a588-4b980d20bc57";

	useEffect(() => {
		Axios.get(statusApiUrl, {
			headers: { Authorization: `Bearer ${token}` },
		}).then((response) => {
			setStatuses(response.data);
		});

		Axios.get(tasksApiUrl, {
			headers: { Authorization: `Bearer ${token}` },
		}).then((response) => {
			setTasks(response.data);
		});
	}, []);

	if (!statuses || !tasks) return <div>Loading...</div>;

	const bgColors = ["#f7bc30", "#fb5607", "#ff006e", "#3a86ff"];

	return (
		<div>
			<div>line</div>
			<div className="flex gap-[52px] mt-[79px]">
				{statuses.map((status, index) => (
					<div key={status.id} className="w-full">
						<div
							className="h-[54px] w-full flex items-center justify-center rounded-[10px] px-4 py-[15px] text-white"
							style={{ backgroundColor: bgColors[index] }}
						>
							{status.name}
						</div>

						<div className="mt-4 space-y-2">
							{tasks
								.filter((task) => task.status.id === status.id)
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
									</div>
								))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
