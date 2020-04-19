import { Component, Input } from "@angular/core";
import { ArticlesByCategory } from "src/models/internal/articles-by-category.model";
import { KeyValue } from "@angular/common";
import { IArticleSummary } from "src/models/internal/article-summary.model";

@Component({
  selector: "app-articles-by-category",
  templateUrl: "./articles-by-category.component.html",
  styleUrls: ["./articles-by-category.component.scss"],
})
export class ArticlesByCategoryComponent {
  @Input()
  public articlesByCategory: ArticlesByCategory;

  articlesOrder = (
    a: KeyValue<string, IArticleSummary[]>,
    b: KeyValue<string, IArticleSummary[]>
  ): number => {
    return b.value.length - a.value.length;
  };
}
