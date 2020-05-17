import { IUserApiResponse } from "../../../user/models/user.external.models";

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
  page: number;
  size: number;
}

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
