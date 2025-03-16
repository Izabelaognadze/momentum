import { PATHS } from "../constants";
import { Priority } from "../types/priority";
import { ApiService } from "./api-service";

export class PriorityApiService {
  private readonly path = PATHS.PRIORITIES;
  constructor(private apiService: ApiService) {}

  public getPriorities(): Promise<Priority> {
    return this.apiService.sendGetRequest<Priority>(`${this.path}`);
  }
}
