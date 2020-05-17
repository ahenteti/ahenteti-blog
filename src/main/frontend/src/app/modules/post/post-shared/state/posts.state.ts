import { Injectable } from "@angular/core";
import { ALL_TAGS } from "../../../shared/utils/constants.utils";
import {
  PostsByCategory,
  IPostSummary,
  PostsSummaries,
} from "../models/post.internal.models";
import { SetUtils } from "src/app/modules/shared/utils/set.utils";

@Injectable({
  providedIn: "root",
})
export class PostsState {
  allTags = new Set<string>();
  allPosts = new PostsByCategory();
  filteredPosts = new PostsByCategory();
  private _selectedTag: string;
  private _postsSearchText: string;

  constructor() {
    this.selectedTag = ALL_TAGS;
    this.postsSearchText = "";
  }

  get selectedTag(): string {
    return this._selectedTag;
  }

  set selectedTag(selectedTag: string) {
    this._selectedTag = selectedTag;
    this.filteredPosts = this.calculateFilteredPosts();
  }

  get postsSearchText(): string {
    return this._postsSearchText;
  }

  set postsSearchText(postsSearchText: string) {
    this._postsSearchText = postsSearchText;
    this.filteredPosts = this.calculateFilteredPosts();
  }

  public addPost(post: IPostSummary): void {}

  public updatePost(post: IPostSummary): void {}

  public setPosts(posts: PostsSummaries): void {
    const allPostsByCategory = new PostsByCategory();
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
      if (!allPostsByCategory.has(post.category)) {
        allPostsByCategory.set(post.category, []);
      }
      allPostsByCategory.get(post.category).push(post);
    });
    this.allPosts = allPostsByCategory;
    this.filteredPosts = allPostsByCategory;
    this.allTags = new Set([ALL_TAGS, ...SetUtils.sort(tags)]);
  }

  private calculateFilteredPosts(): PostsByCategory {
    const res = new PostsByCategory();
    const postsToDisplay = [];
    for (let posts of this.allPosts.values()) {
      postsToDisplay.push(...posts.filter((post) => this.keepPost(post)));
    }
    postsToDisplay.forEach((post) => {
      if (!res.has(post.category)) {
        res.set(post.category, []);
      }
      res.get(post.category).push(post);
    });
    return res;
  }

  private keepPost(post: IPostSummary): boolean {
    if (this.selectedTag == ALL_TAGS) {
      if (!this.postsSearchText) {
        return true;
      } else {
        for (let searchWord of this.postsSearchText.split(" ")) {
          if (post.searchKey.indexOf(searchWord) > -1) return true;
        }
        return false;
      }
    } else {
      if (!this.postsSearchText) {
        return post.tags.includes(this.selectedTag);
      } else {
        for (let userSearchWord of this.postsSearchText.split(" ")) {
          if (
            post.searchKey.indexOf(userSearchWord) > -1 &&
            post.tags.includes(this.selectedTag)
          )
            return true;
        }
        return false;
      }
    }
  }
}
