import { Component, OnInit, OnDestroy } from "@angular/core";
import { SetUtils } from "src/app/modules/shared/services/set.utils";
import { ALL_TAGS } from "src/app/modules/shared/services/constants.utils";
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
    this.state.selectedTag = ALL_TAGS;
    this.postService
      .getAllPostsSummaries()
      .then((posts) => this.state.setPosts(posts));
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
}
