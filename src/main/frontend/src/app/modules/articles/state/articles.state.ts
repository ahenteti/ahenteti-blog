import { Injectable } from "@angular/core";
import { ALL_TAGS } from "../../shared/utils/constants.utils";
import {
  ArticlesByCategory,
  IArticleSummary,
} from "../models/article.internal.models";

@Injectable({
  providedIn: "root",
})
export class ArticlesState {
  allTags = new Set<string>();
  allArticles = new ArticlesByCategory();
  filteredArticles = new ArticlesByCategory();
  private _selectedTag: string;
  private _articlesSearchText: string;

  constructor() {
    this.selectedTag = ALL_TAGS;
    this.articlesSearchText = "";
  }

  get selectedTag(): string {
    return this._selectedTag;
  }

  set selectedTag(selectedTag: string) {
    this._selectedTag = selectedTag;
    this.filteredArticles = this.calculateFilteredArticles();
  }

  get articlesSearchText(): string {
    return this._articlesSearchText;
  }

  set articlesSearchText(articlesSearchText: string) {
    this._articlesSearchText = articlesSearchText;
    this.filteredArticles = this.calculateFilteredArticles();
  }

  private calculateFilteredArticles(): ArticlesByCategory {
    const res = new ArticlesByCategory();
    const articlesToDisplay = [];
    for (let articles of this.allArticles.values()) {
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
      if (!this.articlesSearchText) {
        return true;
      } else {
        for (let searchWord of this.articlesSearchText.split(" ")) {
          if (article.searchKey.indexOf(searchWord) > -1) return true;
        }
        return false;
      }
    } else {
      if (!this.articlesSearchText) {
        return article.tags.includes(this.selectedTag);
      } else {
        for (let userSearchWord of this.articlesSearchText.split(" ")) {
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
