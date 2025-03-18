import { PATHS } from "../constants";
import { Status } from "../types/status";
import type { Task } from "../types/task";
import type { ApiService } from "./api-service";

export class TaskApiService {
  private readonly path = PATHS.TASKS;

  constructor(private apiService: ApiService) {}

  public getTask(id: number): Promise<Task> {
    return this.apiService.sendGetRequest<Task>(`${this.path}/${id}`);
  }

  public getTasks(): Promise<Task[]> {
    return this.apiService.sendGetRequest<Task[]>(this.path);
  }

  public postTask(taskData: Partial<Task>): Promise<Task> {
    return this.apiService.sendPostRequest<Task>(this.path, taskData);
  }

  public changeTaskStatus(id: number, status: Status): Promise<Task> {
    return this.apiService.sendPutRequest<Task>(`${this.path}/${id}`, {
      status_id: status.id,
    });
  }
}
