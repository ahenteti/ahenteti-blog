import { Component, OnInit } from "@angular/core";
import { IArticleService } from "src/services/article/article.service";
import { IArticleSummary } from "src/models/internal/article-summary.model";
import { SetUtils } from "src/utils/set.utils";
import { MapUtils } from "src/utils/map.utils";
import { ArticlesByCategory } from "src/models/internal/articles-by-category.model";

@Component({
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public articlesByCategory: ArticlesByCategory;
  public selectedTag: string;
  public tags: Set<string>;

  constructor(private articleService: IArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getArticlesSummary()
      .subscribe(this.setControllerState.bind(this));
  }

  onSearchInputChange(event) {
    console.log(event);
  }

  onTagSelection(event) {
    console.log(event);
  }

  private setControllerState(articles: IArticleSummary[]): void {
    let articlesByCategory = new Map<string, IArticleSummary[]>();
    let tags = new Set<string>();
    articles.forEach((article) => {
      article.tags.forEach((tag) => tags.add(tag));
      if (!articlesByCategory.has(article.category)) {
        articlesByCategory.set(article.category, []);
      }
      articlesByCategory.get(article.category).push(article);
    });
    this.articlesByCategory = MapUtils.sortValues(
      articlesByCategory,
      (a, b) => b.length - a.length
    );
    this.selectedTag = "all";
    this.tags = new Set([this.selectedTag, ...SetUtils.sort(tags)]);
  }
}
