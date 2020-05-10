import { Component, OnInit } from "@angular/core";
import { SetUtils } from "src/app/modules/shared/utils/set.utils";
import { ALL_TAGS } from "src/app/modules/shared/utils/constants.utils";
import { first } from "rxjs/operators";
import { PostHttpServices } from "../../post/services/post.http.services";
import { PostsState } from "../../post/state/posts.state";
import {
  PostsSummaries,
  PostsByCategory,
} from "../../post/models/post.internal.models";

@Component({
  templateUrl: "post-dashboard.page.html",
  styleUrls: ["post-dashboard.page.scss"],
})
export class PostDashboardPage implements OnInit {
  constructor(
    private postService: PostHttpServices,
    public state: PostsState
  ) {}

  ngOnInit(): void {
    this.postService
      .getPostSummaries()
      .pipe(first())
      .subscribe(this.setInitialControllerState.bind(this));
  }

  handleSearchTextChange(userSearch) {
    this.state.postsSearchText = userSearch;
  }

  handleTagSelection(userTagSelection) {
    this.state.selectedTag = userTagSelection;
  }

  private setInitialControllerState(posts: PostsSummaries): void {
    const allPostsByCategory = new PostsByCategory();
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
      if (!allPostsByCategory.has(post.category)) {
        allPostsByCategory.set(post.category, []);
      }
      allPostsByCategory.get(post.category).push(post);
    });
    this.state.allPosts = allPostsByCategory;
    this.state.filteredPosts = allPostsByCategory;
    this.state.allTags = new Set([ALL_TAGS, ...SetUtils.sort(tags)]);
  }
}
