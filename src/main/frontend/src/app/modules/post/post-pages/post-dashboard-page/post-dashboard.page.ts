import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { SetUtils } from "src/app/modules/shared/services/set.utils";
import { ALL_TAGS } from "src/app/modules/shared/services/constants.utils";
import { first } from "rxjs/operators";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { PostsState } from "../../post-shared/state/posts.state";
import {
  PostsSummaries,
  PostsByCategory,
  PostsGroups,
} from "../../post-shared/models/post.internal.models";
import { Router } from "@angular/router";
import { AlertService } from "src/app/modules/alert/alert.service";
import { Observable } from "rxjs";

@Component({
  templateUrl: "post-dashboard.page.html",
  styleUrls: ["post-dashboard.page.scss"],
})
export class PostDashboardPage implements OnInit, OnDestroy {
  constructor(
    public postsState: PostsState,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.postsState.resetFilters();
  }
  ngOnDestroy(): void {
    this.postsState.resetFilters();
  }

  handleSearchTextChange(searchText: string) {
    this.postsState.setSearchText(searchText);
  }

  loadMorePosts() {
    this.postsState.loadMorePosts();
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.postsState.loadMorePosts();
    }
  }
}
