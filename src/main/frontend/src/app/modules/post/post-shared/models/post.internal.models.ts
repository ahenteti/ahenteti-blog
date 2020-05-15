import { User } from "../../../user/models/user.internal.models";

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

export class DefaultPost implements IPost {
  id = undefined;
  title = "";
  category = "";
  tags = [];
  createdAt = new Date();
  lastUpdatedAt = new Date();
  searchKey = "";
  author = undefined;
  bodyMarkdown = "";
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
  bodyMarkdown =
    "lorem content: Do amet eu tempor dolor cillum ullamco mollit nulla consectetur anim ut eiusmod aliquip occaecat. Ut sint adipisicing irure ex. Laboris magna excepteur ipsum et proident excepteur ipsum amet. Aliqua cupidatat cupidatat velit velit adipisicing nostrud sit aliqua nisi enim aliqua laboris.";
}

export class PostsByCategory extends Map<string, IPostSummary[]> {}
export class PostsSummaries extends Array<IPostSummary> {}
