import { Department } from "./department";
import { Employee } from "./employee";
import { Priority } from "./priority";
import type { Status } from "./status";

export interface Task {
  id: number;
  name: string;
  description: string;
  due_date: string;
  department: Department;
  employee: Employee;
  status: Status;
  priority: Priority;
  total_comments: number;
}

export type CreateTask = Pick<
  Task,
  | "name"
  | "description"
  | "due_date"
  | "department"
  | "employee"
  | "status"
  | "priority"
>;
