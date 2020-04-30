export interface IGetByIdArticleSummaryApiResponse {
  id: number;
  title: string;
  category: string;
  tags: string[];
  publishDateIso8601: string;
  lastUpdateDateIso8601?: string;
}

export class IGetArticlesSummariesApiResponse extends Array<
  IGetByIdArticleSummaryApiResponse
> {}

export interface IGetByIdArticleApiResponse {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAtIso8601: string;
  lastUpdatedAtIso8601?: string;
  bodyMarkdownBase64: string;
  author: string;
  comments?: CommentsExternalModel;
}

export interface ICommentExternalModel {
  author: string;
  createdAtIso8601: string;
  value: string;
}

export class CommentsExternalModel extends Array<ICommentExternalModel> {}
