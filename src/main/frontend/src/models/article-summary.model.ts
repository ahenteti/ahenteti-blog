export interface IBackendApiArticleSummary {
  title: string;
  category: string;
  tags: string[];
  publishDateIso8601: string;
  lastUpdateDateIso8601?: string;
}

export interface IArticleSummary {
  title: string;
  category: string;
  tags: string[];
  publishDate: Date;
  lastUpdateDate: Date;
}
