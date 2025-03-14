import type { Task } from "../types/task";
import type { ApiService } from "./api-service";

export class TaskApiService {
  private readonly path = "tasks";

  constructor(private apiService: ApiService) {}

  public getTask(id: number): Promise<Task> {
    return this.apiService.sendGetRequest<Task>(`${this.path}/${id}`);
  }

  public getTasks(): Promise<Task[]> {
    return this.apiService.sendGetRequest<Task[]>(this.path);
  }
}
