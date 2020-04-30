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
  author: string;
  createdAtIso8601: string;
  value: string;
}
