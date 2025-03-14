import type { Status } from "../types/status";
import type { ApiService } from "./api-service";

export class StatusApiService {
  private readonly path = "tasks";

  constructor(private apiService: ApiService) {}

  public getStatuses(): Promise<Status[]> {
    return this.apiService.sendGetRequest<Status[]>(this.path);
  }
}
