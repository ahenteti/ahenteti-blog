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
  comments: CommentInternalModel[];
}

export class ArticlesByCategory extends Map<string, IArticleSummary[]> {}

export interface CommentInternalModel {
  author: string;
  createdAt: Date;
  contentMarkdown: string;
}
