import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IArticleSummary } from "src/app/modules/articles/models/article.internal.models";

@Component({
  selector: "app-article-summary",
  templateUrl: "./article-summary.component.html",
  styleUrls: ["./article-summary.component.scss"],
})
export class ArticleSummaryComponent {
  @Input()
  public article: IArticleSummary;
}
