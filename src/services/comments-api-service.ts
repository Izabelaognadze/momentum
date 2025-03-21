import { PATHS } from "../constants";
import { CommentInterface } from "../types/comment";
import type { ApiService } from "./api-service";

export class CommentsApiService {
  private readonly path = PATHS.COMMENTS;

  constructor(private apiService: ApiService) {}

  public getComments(task_id: number): Promise<CommentInterface[]> {
    return this.apiService.sendGetRequest<CommentInterface[]>(
      `tasks/${task_id}/${this.path}`
    );
  }

  public postComment(
    data: Partial<CommentInterface>
  ): Promise<CommentInterface> {
    return this.apiService.sendPostRequest<CommentInterface>(this.path, data);
  }
}
