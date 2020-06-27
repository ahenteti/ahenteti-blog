import { AuthorApiResponse } from "../../../user/models/user.external.models";

export interface IPostCommentApiResponse {
  author: AuthorApiResponse;
  createdAtIso8601: string;
  value: string;
}

export class GetPostCommentsApiRequest {
  slug: string;
  page: number;
  size: number;
}

export interface ICreatePostCommentApiRequestBody {
  value: string;
}

export interface ICreatePostCommentApiRequest {
  slug: string;
  value: string;
}
