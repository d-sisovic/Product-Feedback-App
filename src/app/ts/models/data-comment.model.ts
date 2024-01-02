import { IDataReply } from "./data-reply.model";
import { IDataCommentUser } from "./data-comment-user.model";

export interface IDataComment {
  id: number;
  content: string;
  user: IDataCommentUser;
  replies?: IDataReply[];
}
