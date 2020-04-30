export interface IArticleSummary {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAt: Date;
  lastUpdatedAt: Date;
  searchKey: string;
}

export class ArticlesSummaries extends Array<IArticleSummary> {}

export interface IArticle extends IArticleSummary {
  author: string;
  bodyMarkdown: string;
  comments: Comments;
}

export class ArticlesByCategory extends Map<string, IArticleSummary[]> {}

export interface IComment {
  author: string;
  createdAt: Date;
  value: string;
}

export class Comments extends Array<IComment> {}
