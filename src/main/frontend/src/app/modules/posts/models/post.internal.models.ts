export interface IPostSummary {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAt: Date;
  lastUpdatedAt: Date;
  searchKey: string;
}

export interface IPost extends IPostSummary {
  author: string;
  bodyMarkdown: string;
  comments: Comments;
}

export class EmptyPost implements IPost {
  id = 1;
  title = "";
  category = "";
  tags = [];
  createdAt = new Date();
  lastUpdatedAt = new Date();
  searchKey = "";
  author = "";
  bodyMarkdown = "";
  comments = [];
}

export interface IComment {
  author: string;
  createdAt: Date;
  value: string;
}

export class PostsByCategory extends Map<string, IPostSummary[]> {}
export class PostsSummaries extends Array<IPostSummary> {}
export class Comments extends Array<IComment> {}
