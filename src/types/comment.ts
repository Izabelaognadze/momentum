import { Employee } from "./employee";

export interface CommentInterface {
  id: number;
  text: string;
  task_id: number;
  parent_id: number | null;
  author_avatar: Employee["avatar"];
  author_nickname: Employee["name"];
  sub_comments?: Comment[];
}
