import { PATHS } from "../constants";
import { Department } from "../types/department";
import { ApiService } from "./api-service";

export class DepartmentApiService {
  private readonly path = PATHS.DEPARTMENTS;
  constructor(private apiService: ApiService) {}

  public getDepartments(): Promise<Department> {
    return this.apiService.sendGetRequest<Department>(`${this.path}`);
  }
}
