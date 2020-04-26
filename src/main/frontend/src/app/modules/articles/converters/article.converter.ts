import {
  IArticleSummary,
  IArticle,
  CommentInternalModel,
} from "src/app/modules/articles/models/article.internal.models";
import {
  IGetByIdArticleSummaryApiResponse,
  IGetByIdArticleApiResponse,
  CommentExternalModel,
} from "../models/article.external.models";
import { Injectable } from "@angular/core";

@Injectable()
export class ArticleConverter {
  fromArticleSummary(
    article: IGetByIdArticleSummaryApiResponse
  ): IArticleSummary {
    return {
      id: article.id,
      title: article.title,
      category: article.category,
      tags: article.tags,
      createdAt: new Date(article.publishDateIso8601),
      lastUpdatedAt: new Date(
        article.lastUpdateDateIso8601
          ? article.lastUpdateDateIso8601
          : article.publishDateIso8601
      ),
      searchKey: this.calculateSearchKey(article.title, article.tags),
    };
  }

  fromArticle(article: IGetByIdArticleApiResponse): IArticle {
    return {
      id: article.id,
      title: article.title,
      category: article.category,
      tags: article.tags,
      createdAt: new Date(article.createdAtIso8601),
      lastUpdatedAt: new Date(
        article.lastUpdatedAtIso8601
          ? article.lastUpdatedAtIso8601
          : article.createdAtIso8601
      ),
      searchKey: this.calculateSearchKey(article.title, article.tags),
      author: article.author,
      bodyMarkdown: atob(article.bodyMarkdownBase64),
      comments: [...(article.comment || []).map(this.from)],
    };
  }

  private from(comment: CommentExternalModel): CommentInternalModel {
    return {
      author: comment.author,
      createdAt: new Date(comment.createdAtIso8601),
      contentMarkdown: atob(comment.markdownContentBase64),
    };
  }

  private calculateSearchKey(
    articleTitle: string,
    articleTags: string[]
  ): string {
    return [...articleTitle.split(" "), ...articleTags].join(" ");
  }
}
