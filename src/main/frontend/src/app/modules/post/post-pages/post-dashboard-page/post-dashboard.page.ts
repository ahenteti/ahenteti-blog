import { Component, OnInit, OnDestroy } from "@angular/core";
import { SetUtils } from "src/app/modules/shared/utils/set.utils";
import { ALL_TAGS } from "src/app/modules/shared/utils/constants.utils";
import { first } from "rxjs/operators";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { PostsState } from "../../post-shared/state/posts.state";
import {
  PostsSummaries,
  PostsByCategory,
} from "../../post-shared/models/post.internal.models";
import { Router } from "@angular/router";

@Component({
  templateUrl: "post-dashboard.page.html",
  styleUrls: ["post-dashboard.page.scss"],
})
export class PostDashboardPage implements OnInit, OnDestroy {
  constructor(
    private postService: PostHttpServices,
    public state: PostsState,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postService
      .getAllPostsSummaries()
      .then(this.setInitialControllerState.bind(this));
    // this.router.events.subscribe(event => {
    //   if (event in)
    // })
  }

  ngOnDestroy(): void {
    this.state.selectedTag = ALL_TAGS;
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
