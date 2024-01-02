import { IDataCommentUser } from "./data-comment-user.model";

export interface IDataReply {
  content: string;
  replyingTo: string;
  user: IDataCommentUser;
}
