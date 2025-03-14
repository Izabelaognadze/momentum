import { PATHS } from "../constants";
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
}
