export const PATHS = {
  STATUSES: "statuses",
  PRIORITIES: "priorities",
  DEPARTMENTS: "departments",
  EMPLOYEES: "employees",
  COMMENTS: "comments",
  TASKS: "tasks",
} as const;

export const PRIORITIES: Record<string, string> = {
  1: "var(--green)",
  2: "var(--yellow)",
  3: "var(--red)",
};
