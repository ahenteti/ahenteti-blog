import { Component, Input } from "@angular/core";
import { IArticle } from "../../models/article.internal.models";

@Component({
  selector: "app-article-title",
  templateUrl: "./article-title.component.html",
  styleUrls: ["./article-title.component.scss"],
})
export class ArticleTitleComponent {
  @Input()
  article: IArticle;
}
