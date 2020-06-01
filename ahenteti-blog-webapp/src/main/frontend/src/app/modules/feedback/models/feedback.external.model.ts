import { AuthorApiResponse } from "../../user/models/user.external.models";
import { PageApiResponse } from "../../shared/models/page.model";

export class CreateFeedbackApiRequest {
  url: string;
  body: CreateFeedbackApiRequestBody;
}

export class CreateFeedbackApiRequestBody {
  value: string;
}

export class GetFeedbacksPageApiRequest {
  url: string;
}

export class FeedbackApiResponse {
  value: string;
  createdAtIso8601: string;
  author: AuthorApiResponse;
}

export class FeedbacksPageApiResponse extends PageApiResponse<
  FeedbackApiResponse
> {}
