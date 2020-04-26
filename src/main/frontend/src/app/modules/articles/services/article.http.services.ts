import {
  ArticlesSummaries,
  IArticle,
} from "src/app/modules/articles/models/article.internal.models";
import { Observable } from "rxjs";

export abstract class ArticleHttpServices {
  abstract getArticlesSummary(): Observable<ArticlesSummaries>;
  abstract getArticleById(articleId: number): Observable<IArticle>;
}
