import { IArticleSummary } from "src/app/modules/articles/article.internal.models";
import { Injectable } from "@angular/core";
import { IGetByIdArticleSummaryApiResponse } from "./article.external.models";

@Injectable()
export class ArticleConverter {
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
