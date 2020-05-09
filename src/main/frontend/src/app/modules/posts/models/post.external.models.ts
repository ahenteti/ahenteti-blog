import { IUserApiResponse } from "../../shared/models/user.external.models";

export interface IPostSummaryApiResponse {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAtIso8601: string;
  lastUpdatedAtIso8601?: string;
  author: string;
}

export interface IPostApiResponse extends IPostSummaryApiResponse {
  bodyMarkdownBase64: string;
  comments: ICommentApiResponse[];
}

export interface ICommentApiResponse {
  author: IUserApiResponse;
  createdAtIso8601: string;
  value: string;
}

export interface ICommentApiRequest {
  postId: number;
  value: string;
}
