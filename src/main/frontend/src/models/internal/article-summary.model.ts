export interface IArticleSummary {
  id: number;
  title: string;
  category: string;
  tags: string[];
  publishDate: Date;
  lastUpdateDate: Date;
  searchKey: string;
}
