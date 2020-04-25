export interface IArticleSummary {
  id: number;
  title: string;
  category: string;
  tags: string[];
  publishDate: Date;
  lastUpdateDate: Date;
  searchKey: string;
}

export class ArticlesByCategory extends Map<string, IArticleSummary[]> {}
