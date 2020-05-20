import { Component, OnInit, ViewChild } from "@angular/core";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { PostsSummariesPage } from "../../post-shared/models/post.internal.models";
import { AnimatedLoadingPage } from "src/app/modules/shared/pages/animated-loading.page";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AlertService } from "src/app/modules/alert/alert.service";
import { PostConverter } from "../../post-shared/services/post.converter";
import { Observable, Subject } from "rxjs";
import { PostsState } from "../../post-shared/state/posts.state";

@Component({
  templateUrl: "manage-posts.page.html",
  styleUrls: ["manage-posts.page.scss"],
})
export class ManagePostsPage extends AnimatedLoadingPage implements OnInit {
  currentUserPostsPage = new PostsSummariesPage();
  userPostsDataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ["title", "category", "createdAt", "actions"];
  previousButtonCssClasses$ = new Subject<string>();
  nextButtonCssClasses$ = new Subject<string>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private postHttpServices: PostHttpServices,
    private postConverter: PostConverter,
    private alertService: AlertService,
    private postsState: PostsState
  ) {
    super();
  }

  ngOnInit() {
    const request = this.postConverter.toGetUserPostsApiRequest(0);
    this.postHttpServices
      .getUserPosts(request)
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

  handleNextButtonClickEvent() {
    this.getNewUserPostsPage(this.currentUserPostsPage.page + 1);
  }

  handlePreviousButtonClickEvent() {
    this.getNewUserPostsPage(this.currentUserPostsPage.page - 1);
  }

  private getNewUserPostsPage(page: number) {
    const request = this.postConverter.toGetUserPostsApiRequest(page);
    this.postHttpServices
      .getUserPosts(request)
      .then((posts) => this.handleGetUserPostsSuccessEvent(posts))
      .catch((error) => this.handleGetUserPostsErrorEvent(error));
  }

  private recalculatePreviousNextButtonCssClasses() {
    let classes = [];
    if (this.currentUserPostsPage.firstPage) {
      classes.push("disabled");
    }
    this.previousButtonCssClasses$.next(classes.join(" "));
    classes = [];
    if (this.currentUserPostsPage.lastPage) {
      classes.push("disabled");
    }
    this.nextButtonCssClasses$.next(classes.join(" "));
  }

  private handleDeletePostErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while deleting your post :(");
  }

  private handleGetUserPostsErrorEvent(error) {
    console.error(error);
    this.alertService.error("Error while fetching user posts :(");
  }

  // prettier-ignore
  private handleDeletePostSuccessEvent(postId: number) {
    this.alertService.info("Post deleted with success");
    this.userPostsDataSource.data = this.userPostsDataSource.data.filter(
      (post) => post.id !== postId
    );
    this.userPostsDataSource._updateChangeSubscription(); // <-- Refresh the data source, reference: https://stackoverflow.com/questions/54744770/how-to-delete-particular-row-from-angular-material-table-which-doesnt-have-filte
    this.postsState.deletePost(postId);
  }

  private handleGetUserPostsSuccessEvent(postsPage: PostsSummariesPage) {
    this.currentUserPostsPage = postsPage;
    this.userPostsDataSource = new MatTableDataSource(postsPage.items);
    this.userPostsDataSource.sort = this.sort;
    this.recalculatePreviousNextButtonCssClasses();
  }
}
