import { PATHS } from "../constants";
import { Employee } from "../types/employee";
import type { ApiService } from "./api-service";

export class EmployeeApiService {
  private readonly path = PATHS.EMPLOYEES;

  constructor(private apiService: ApiService) {}

  public getEmployees(): Promise<Employee[]> {
    return this.apiService.sendGetRequest<Employee[]>(this.path);
  }

  public postEmployee(data: Partial<Employee>): Promise<Employee> {
    return this.apiService.sendPostRequest<Employee>(this.path, data);
  }
}
