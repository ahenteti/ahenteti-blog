import { IUserApiResponse } from "../../../user/models/user.external.models";

export class PageApiResponse<T> {
  page: number;
  size: number;
  totalItems: number;
  lastPage: boolean;
  items: Array<T>;
}

export interface IPostSummaryApiResponse {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAtIso8601: string;
  lastUpdatedAtIso8601?: string;
  author: IUserApiResponse;
}

export interface IPostApiResponse extends IPostSummaryApiResponse {
  bodyMarkdownBase64: string;
}

export class GetUserPostsApiRequest {
  url: string;
}

export class GetUserPostsApiResponse extends PageApiResponse<
  IPostSummaryApiResponse
> {}

export class CreatePostApiRequest {
  url: string;
  body: CreatePostApiRequestBody;
}

export class CreatePostApiRequestBody {
  title: string;
  category: string;
  tags: Array<string>;
  bodyMarkdownBase64: string;
}

export class UpdatePostApiRequest {
  url: string;
  body: UpdatePostApiRequestBody;
}

export class UpdatePostApiRequestBody {
  title: string;
  category: string;
  tags: Array<string>;
  bodyMarkdownBase64: string;
  createdAtIso8601: string;
}

export class DeletePostApiRequest {
  url: string;
}
