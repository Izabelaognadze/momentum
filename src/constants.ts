export const PATHS = {
  STATUSES: "statuses",
  PRIORITIES: "priorities",
  DEPARTMENTS: "departments",
  EMPLOYEES: "employees",
  COMMENTS: "comments",
  TASKS: "tasks",
} as const;

export const PRIORITIES: Record<number, string> = {
  1: "#08a508", 
  2: "#ffbe0b", 
  3: "#fa4d4d",
};
