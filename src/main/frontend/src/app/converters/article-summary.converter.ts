import { IGetByIdArticleSummaryApiResponse } from "src/app/models/backend/get-by-id-article-summary-api-response.model";
import { IArticleSummary } from "src/app/models/internal/article/article-summary.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ArticleSummaryConverter {
  from(article: IGetByIdArticleSummaryApiResponse): IArticleSummary {
    return {
      id: article.id,
      title: article.title,
      category: article.category,
      tags: article.tags,
      publishDate: new Date(article.publishDateIso8601),
      lastUpdateDate: new Date(
        article.lastUpdateDateIso8601
          ? article.lastUpdateDateIso8601
          : article.publishDateIso8601
      ),
      searchKey: this.calculateSearchKey(article),
    };
  }

  private calculateSearchKey(
    article: IGetByIdArticleSummaryApiResponse
  ): string {
    return [...article.title.split(" "), ...article.tags].join(" ");
  }
}
