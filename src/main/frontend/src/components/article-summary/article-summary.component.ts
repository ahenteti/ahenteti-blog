import { Component, Input } from "@angular/core";
import { IArticleSummary } from "src/models/internal/article-summary.model";

@Component({
  selector: "app-article-summary",
  templateUrl: "./article-summary.component.html",
  styleUrls: ["./article-summary.component.scss"],
})
export class ArticleSummaryComponent {
  @Input()
  public article: IArticleSummary;
}
