import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IArticleSummary } from "src/models/internal/article-summary.model";

@Component({
  selector: "app-article-summary",
  templateUrl: "./article-summary.component.html",
  styleUrls: ["./article-summary.component.scss"],
})
export class ArticleSummaryComponent {
  @Input()
  public article: IArticleSummary;

  @Input()
  public selectedTag: string;

  @Output()
  public tagClick = new EventEmitter<string>();

  handleTagClickEvent(selectedTag) {
    this.tagClick.emit(selectedTag);
  }
}
