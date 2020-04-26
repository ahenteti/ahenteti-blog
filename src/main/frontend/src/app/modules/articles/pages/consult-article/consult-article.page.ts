import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  OnDestroy,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleHttpServices } from "../../services/article.http.services";
import { IArticle } from "../../models/article.internal.models";
import { first } from "rxjs/operators";
import { QuoteComponent } from "src/app/modules/shared/components/text-with-icon/quote.component";

@Component({
  templateUrl: "./consult-article.page.html",
  styleUrls: ["./consult-article.page.scss"],
})
export class ConsultArticlePage implements OnInit {
  articleId: number;
  article: IArticle;

  constructor(
    route: ActivatedRoute,
    private articleHttpServices: ArticleHttpServices
  ) {
    this.articleId = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.articleHttpServices
      .getArticleById(this.articleId)
      .pipe(first())
      .subscribe((article) => this.onLoadArticle(article));
  }

  private onLoadArticle(article: IArticle) {
    this.article = article;
  }
}
