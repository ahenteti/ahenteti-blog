import { AuthorApiResponse } from "../../../user/models/user.external.models";
import { PageApiResponse } from "src/app/modules/shared/models/page.model";

export class PostsSummariesGroupApiResponse {
  groupName: string;
  posts: Array<PostSummaryApiResponse>;
}

export class PostSummaryApiResponse {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAtIso8601: string;
  lastUpdatedAtIso8601?: string;
  author: AuthorApiResponse;
}

export class PostApiResponse extends PostSummaryApiResponse {
  bodyMarkdownBase64: string;
}

export class GetUserPostsApiRequest {
  url: string;
}

export class UserPostsPageApiResponse extends PageApiResponse<
  PostSummaryApiResponse
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
}

export class DeletePostApiRequest {
  url: string;
}

export class GetPostGroupByStrategiesApiRequest {
  url: string;
}

export class PostGroupByStrategyApiResponse {
  name: string;
  values: Array<string>;
}

export class GetPostsGroupsApiRequest {
  url: string;
}

export class PostsGroupApiResponse {
  name: string;
  posts: Array<PostSummaryApiResponse>;
}
