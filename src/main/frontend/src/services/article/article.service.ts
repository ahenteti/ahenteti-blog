import { IArticleSummary } from "src/models/article-summary.model";
import { Observable } from "rxjs";

export abstract class IArticleService {
  abstract getArticlesSummary(): Observable<IArticleSummary[]>;
}
