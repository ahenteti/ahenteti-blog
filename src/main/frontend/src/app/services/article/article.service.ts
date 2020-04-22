import { IArticleSummary } from "src/app/models/internal/article-summary.model";
import { Observable } from "rxjs";

export abstract class IArticleService {
  abstract getArticlesSummary(): Observable<IArticleSummary[]>;
}
