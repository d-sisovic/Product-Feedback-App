import { IDataCurrentUser } from "./data-current-user.model";
import { IDataProductRequest } from "./data-product-request.model";

export interface IDataResponse {
  currentUser: IDataCurrentUser;
  productRequests: IDataProductRequest[];
}
