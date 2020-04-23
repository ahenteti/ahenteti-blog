import { IArticleSummary } from "src/app/models/internal/article/article-summary.model";
import { Observable } from "rxjs";

export abstract class IArticleService {
  abstract getArticlesSummary(): Observable<IArticleSummary[]>;
}
