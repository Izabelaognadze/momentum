import { ApiService } from "./api-service";
import { CommentsApiService } from "./comments-api-service";
import { DepartmentApiService } from "./department-api-service";
import { EmployeeApiService } from "./employees-api-services";
import { PriorityApiService } from "./priority.api.service";
import { StatusApiService } from "./status-api-service";
import { TaskApiService } from "./task-api-service";

const apiService = new ApiService();

export const priorityApiService = new PriorityApiService(apiService);
export const taskApiService = new TaskApiService(apiService);
export const statusApiService = new StatusApiService(apiService);
export const departmentApiService = new DepartmentApiService(apiService);
export const employeeApiService = new EmployeeApiService(apiService);
export const commentsApiService = new CommentsApiService(apiService);
