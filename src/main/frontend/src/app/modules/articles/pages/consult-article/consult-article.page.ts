import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { logging } from "protractor";

@Component({
  templateUrl: "./consult-article.page.html",
  styleUrls: ["./consult-article.page.scss"],
})
export class ConsultArticleComponent {
  articleId: number;

  constructor(route: ActivatedRoute) {
    this.articleId = route.snapshot.params["id"];
  }
}
