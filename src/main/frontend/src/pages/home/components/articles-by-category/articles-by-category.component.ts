import { Component, Input, OnInit } from "@angular/core";
import { ArticlesByCategory } from "src/models/articles-by-category.model";

@Component({
  selector: "app-articles-by-category",
  templateUrl: "./articles-by-category.component.html",
  styleUrls: ["./articles-by-category.component.scss"],
})
export class ArticlesByCategoryComponent {
  @Input()
  public articlesByCategory: ArticlesByCategory;
}
