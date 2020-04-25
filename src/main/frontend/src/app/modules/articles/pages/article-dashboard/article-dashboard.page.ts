import { Component, OnInit } from "@angular/core";
import {
  IArticleSummary,
  ArticlesByCategory,
} from "src/app/modules/articles/models/article.internal.models";
import { SetUtils } from "src/app/modules/shared/utils/set.utils";
import { ALL_TAGS } from "src/app/modules/shared/utils/constants.utils";
import { ArticleHttpServices } from "../../services/article.http.services";
import { ArticlesState } from "src/app/modules/articles/state/articles.state";

@Component({
  templateUrl: "article-dashboard.page.html",
  styleUrls: ["article-dashboard.page.scss"],
})
export class ArticleDashboardPage implements OnInit {
  constructor(
    private articleService: ArticleHttpServices,
    private state: ArticlesState
  ) {}

  ngOnInit(): void {
    this.articleService
      .getArticlesSummary()
      .subscribe(this.setInitialControllerState.bind(this));
  }

  handleSearchTextChange(userSearch) {
    this.state.articlesSearchText = userSearch;
  }

  handleTagSelection(userTagSelection) {
    this.state.selectedTag = userTagSelection;
  }

  private setInitialControllerState(articles: IArticleSummary[]): void {
    const allArticlesByCategory = new ArticlesByCategory();
    const tags = new Set<string>();
    articles.forEach((article) => {
      article.tags.forEach((tag) => tags.add(tag));
      if (!allArticlesByCategory.has(article.category)) {
        allArticlesByCategory.set(article.category, []);
      }
      allArticlesByCategory.get(article.category).push(article);
    });
    this.state.allArticles = allArticlesByCategory;
    this.state.filteredArticles = allArticlesByCategory;
    this.state.allTags = new Set([ALL_TAGS, ...SetUtils.sort(tags)]);
  }
}
