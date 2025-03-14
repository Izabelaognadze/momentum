import type { Status } from "./status";

export interface Task {
	name: string;
	description: string;
	due_date: string;
	status: Status;
	employee_id: number;
	priority_id: number;
}
