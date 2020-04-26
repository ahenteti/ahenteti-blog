import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  ArticlesByCategory,
  ArticlesSummaries,
} from "src/app/modules/articles/models/article.internal.models";
import { SetUtils } from "src/app/modules/shared/utils/set.utils";
import { ALL_TAGS } from "src/app/modules/shared/utils/constants.utils";
import { ArticlesState } from "src/app/modules/articles/state/articles.state";
import { first } from "rxjs/operators";
import { ArticleHttpServices } from "../../services/article.http.services";

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
      .pipe(first())
      .subscribe(this.setInitialControllerState.bind(this));
  }

  handleSearchTextChange(userSearch) {
    this.state.articlesSearchText = userSearch;
  }

  handleTagSelection(userTagSelection) {
    this.state.selectedTag = userTagSelection;
  }

  private setInitialControllerState(articles: ArticlesSummaries): void {
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
