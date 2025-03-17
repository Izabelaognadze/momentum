import { ApiService } from "./api-service";
import { DepartmentApiService } from "./departmentApiService";
import { PriorityApiService } from "./priority.api.service";
import { StatusApiService } from "./status-api-service";
import { TaskApiService } from "./task-api-service";

const apiService = new ApiService();

export const priorityApiService = new PriorityApiService(apiService);
export const taskApiService = new TaskApiService(apiService);
export const statusApiService = new StatusApiService(apiService);
export const departmentApiService = new DepartmentApiService(apiService);
