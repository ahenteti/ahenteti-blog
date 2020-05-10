import { User } from "../../user/models/user.internal.models";

export interface IPostSummary {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAt: Date;
  lastUpdatedAt: Date;
  searchKey: string;
  author: User;
}

export interface IPost extends IPostSummary {
  bodyMarkdown: string;
}

export class OfflinePost implements IPost {
  id = undefined;
  title = "post title";
  category = "post category";
  tags = ["port-tag"];
  createdAt = new Date();
  lastUpdatedAt = new Date();
  searchKey = "";
  author = undefined;
  bodyMarkdown = "Hello world!";
}

export class PostsByCategory extends Map<string, IPostSummary[]> {}
export class PostsSummaries extends Array<IPostSummary> {}
