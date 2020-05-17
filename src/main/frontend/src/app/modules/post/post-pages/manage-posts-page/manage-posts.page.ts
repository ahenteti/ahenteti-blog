import { Component, OnInit, ViewChild } from "@angular/core";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { PostsSummaries } from "../../post-shared/models/post.internal.models";
import { AnimatedLoadingPage } from "src/app/modules/shared/pages/animated-loading.page";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AlertService } from "src/app/modules/alert/alert.service";
import { PostConverter } from "../../post-shared/services/post.converter";

@Component({
  templateUrl: "manage-posts.page.html",
  styleUrls: ["manage-posts.page.scss"],
})
export class ManagePostsPage extends AnimatedLoadingPage implements OnInit {
  userPosts = new MatTableDataSource(new PostsSummaries());
  currentUserPostsPage = -1;
  displayedColumns: string[] = ["title", "category", "createdAt", "actions"];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private postHttpServices: PostHttpServices,
    private postConverter: PostConverter,
    private alertService: AlertService
  ) {
    super();
  }

  ngOnInit() {
    this.postHttpServices
      .getUserPosts(++this.currentUserPostsPage)
      .then((posts) => this.handleGetUserPostsSuccessEvent(posts))
      .catch((error) => this.handleGetUserPostsErrorEvent(error))
      .finally(() => this.hideLoader());
  }

  deletePost(postId: number) {
    const request = this.postConverter.toDeletePostApiRequest(postId);
    this.postHttpServices
      .deletePost(request)
      .then(() => this.handleDeletePostSuccessEvent(postId))
      .catch((error) => this.handleDeletePostErrorEvent(error));
  }

  private handleDeletePostErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while deleting your post :(");
  }

  private handleGetUserPostsErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while fetching user posts :(");
  }

  private handleDeletePostSuccessEvent(postId: number) {
    this.alertService.info("Post deleted with success");
    this.userPosts.data = this.userPosts.data.filter(
      (post) => post.id !== postId
    );
    this.userPosts._updateChangeSubscription(); // <-- Refresh the data source
    // reference: https://stackoverflow.com/questions/54744770/how-to-delete-particular-row-from-angular-material-table-which-doesnt-have-filte
  }

  private handleGetUserPostsSuccessEvent(posts: PostsSummaries) {
    this.userPosts = new MatTableDataSource(posts);
    this.userPosts.sort = this.sort;
  }
}
