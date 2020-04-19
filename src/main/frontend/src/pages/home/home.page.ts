import { Component, OnInit } from "@angular/core";
import { IArticleService } from "src/services/article/article.service";
import { IArticleSummary } from "src/models/internal/article-summary.model";
import { SetUtils } from "src/utils/set.utils";
import { ArticlesByCategory } from "src/models/internal/articles-by-category.model";
import { ALL_TAGS } from "src/utils/constants.utils";

@Component({
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public allArticlesByCategory: ArticlesByCategory;
  public displayedArticlesByCategory: ArticlesByCategory;
  public selectedTag: string;
  public tags: Set<string>;
  public searchText: string;

  constructor(private articleService: IArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getArticlesSummary()
      .subscribe(this.setInitialControllerState.bind(this));
  }

  handleSearchTextChange(userSearch) {
    this.searchText = userSearch;
    this.displayedArticlesByCategory = this.getArticlesToDisplay();
  }

  handleTagSelection(userTagSelection) {
    this.selectedTag = userTagSelection;
    this.displayedArticlesByCategory = this.getArticlesToDisplay();
  }

  handleTagClickEvent(selectedTag) {
    this.selectedTag = selectedTag;
    this.displayedArticlesByCategory = this.getArticlesToDisplay();
  }

  private setInitialControllerState(articles: IArticleSummary[]): void {
    this.allArticlesByCategory = new ArticlesByCategory();
    const tags = new Set<string>();
    articles.forEach((article) => {
      article.tags.forEach((tag) => tags.add(tag));
      if (!this.allArticlesByCategory.has(article.category)) {
        this.allArticlesByCategory.set(article.category, []);
      }
      this.allArticlesByCategory.get(article.category).push(article);
    });
    this.selectedTag = ALL_TAGS;
    this.tags = new Set([this.selectedTag, ...SetUtils.sort(tags)]);
    this.displayedArticlesByCategory = this.getArticlesToDisplay();
  }

  private getArticlesToDisplay(): ArticlesByCategory {
    const res = new ArticlesByCategory();
    const articlesToDisplay = [];
    for (let articles of this.allArticlesByCategory.values()) {
      articlesToDisplay.push(
        ...articles.filter((article) => this.keepArticle(article))
      );
    }
    articlesToDisplay.forEach((article) => {
      if (!res.has(article.category)) {
        res.set(article.category, []);
      }
      res.get(article.category).push(article);
    });
    return res;
  }

  private keepArticle(article: IArticleSummary): boolean {
    if (this.selectedTag == ALL_TAGS) {
      if (!this.searchText) {
        return true;
      } else {
        for (let searchWord of this.searchText.split(" ")) {
          if (article.searchKey.indexOf(searchWord) > -1) return true;
        }
        return false;
      }
    } else {
      if (!this.searchText) {
        return article.tags.includes(this.selectedTag);
      } else {
        for (let userSearchWord of this.searchText.split(" ")) {
          if (
            article.searchKey.indexOf(userSearchWord) > -1 &&
            article.tags.includes(this.selectedTag)
          )
            return true;
        }
        return false;
      }
    }
  }
}
