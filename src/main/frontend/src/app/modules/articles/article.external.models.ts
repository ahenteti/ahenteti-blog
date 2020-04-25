export interface IGetByIdArticleSummaryApiResponse {
  id: number;
  title: string;
  category: string;
  tags: string[];
  publishDateIso8601: string;
  lastUpdateDateIso8601?: string;
}
