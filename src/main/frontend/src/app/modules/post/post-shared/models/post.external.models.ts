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
