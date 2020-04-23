import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ArticlesByCategory } from "src/app/models/internal/article/articles-by-category.model";
import { KeyValue } from "@angular/common";
import { IArticleSummary } from "src/app/models/internal/article/article-summary.model";

@Component({
  selector: "app-articles-by-category",
  templateUrl: "./articles-by-category.component.html",
  styleUrls: ["./articles-by-category.component.scss"],
})
export class ArticlesByCategoryComponent {
  @Input()
  public articlesByCategory: ArticlesByCategory;

  @Input()
  public selectedTag: string;

  @Output()
  public tagClick = new EventEmitter<string>();

  articlesOrder = (
    a: KeyValue<string, IArticleSummary[]>,
    b: KeyValue<string, IArticleSummary[]>
  ): number => {
    return b.value.length - a.value.length;
  };

  handleTagClickEvent(selectedTag) {
    this.tagClick.emit(selectedTag);
  }
}
