import axios from "axios";

export class ApiService {
  private readonly baseUrl = "https://momentum.redberryinternship.ge/api";
  private readonly authToken = "9e6b1a8e-0764-466b-a588-4b980d20bc57";

  public sendGetRequest<ResponseType>(path: string): Promise<ResponseType> {
    return axios.get(`${this.baseUrl}/${path}`, {
      headers: { Authorization: `Bearer ${this.authToken}` },
    });
  }

  public sendPostRequest<ResponseType>(
    path: string,
    body: unknown
  ): Promise<ResponseType> {
    return axios.post(`${this.baseUrl}/${path}`, body, {
      headers: { Authorization: `Bearer ${this.authToken}` },
    });
  }
}
