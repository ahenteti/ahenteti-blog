import { Component, OnInit, OnDestroy } from "@angular/core";
import { PostsState } from "../../post-shared/state/posts.state";

@Component({
  templateUrl: "post-dashboard.page.html",
  styleUrls: ["post-dashboard.page.scss"],
})
export class PostDashboardPage implements OnInit, OnDestroy {
  public noMorePosts = false;

  constructor(public postsState: PostsState) {}

  ngOnInit(): void {
    this.postsState.resetFilters();
    this.postsState.noMorePosts$.subscribe(
      (value) => (this.noMorePosts = value)
    );
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
}
