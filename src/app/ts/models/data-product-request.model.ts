import { IDataComment } from "./data-comment.model";

export interface IDataProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: IDataComment[];
}
