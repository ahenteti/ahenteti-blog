import { IUserApiResponse } from "../../user/models/user.external.models";

export interface IPostCommentApiResponse {
  author: IUserApiResponse;
  createdAtIso8601: string;
  value: string;
}

export class GetPostCommentsApiRequest {
  postId: number;
  page: number;
  size: number;
}

export interface ICreatePostCommentApiRequestBody {
  value: string;
}

export interface ICreatePostCommentApiRequest {
  postId: number;
  value: string;
}
