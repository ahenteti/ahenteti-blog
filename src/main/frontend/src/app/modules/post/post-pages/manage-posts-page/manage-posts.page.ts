import { Component, OnInit, ViewChild } from "@angular/core";
import { PostHttpServices } from "../../post-shared/services/post.http.services";
import { PostsPage } from "../../post-shared/models/post.internal.models";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AlertService } from "src/app/modules/alert/alert.service";
import { PostConverter } from "../../post-shared/services/post.converter";
import { Subject } from "rxjs";
import { PostsState } from "../../post-shared/state/posts.state";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component";

@Component({
  templateUrl: "manage-posts.page.html",
  styleUrls: ["manage-posts.page.scss"],
})
export class ManagePostsPage implements OnInit {
  currentPage = new PostsPage();
  dataSource = new MatTableDataSource([]);
  columns: string[] = ["title", "category", "createdAt", "actions"];
  previousButtonCssClasses = "";
  nextButtonCssClasses = "";
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  filter = "";

  constructor(
    private postHttpServices: PostHttpServices,
    private postConverter: PostConverter,
    private alertService: AlertService,
    private postsState: PostsState,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const request = this.postConverter.toGetUserPostsApiRequest(this.filter, 0);
    this.postHttpServices
      .getUserPosts(request)
      .then((posts) => this.handleGetUserPostsSuccessEvent(posts))
      .catch((error) => this.handleGetUserPostsErrorEvent(error));
  }

  deletePost(postId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Do you confirm the deletion of this post ?",
      width: "340px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const request = this.postConverter.toDeletePostApiRequest(postId);
        this.postHttpServices
          .deletePost(request)
          .then(() => this.handleDeletePostSuccessEvent(postId))
          .catch((error) => this.handleDeletePostErrorEvent(error));
      }
    });
  }

  handleNextButtonClickEvent() {
    this.getNewUserPostsPage(this.currentPage.page + 1);
  }

  handlePreviousButtonClickEvent() {
    this.getNewUserPostsPage(this.currentPage.page - 1);
  }

  // prettier-ignore
  private getNewUserPostsPage(page: number) {
    const request = this.postConverter.toGetUserPostsApiRequest(this.filter, page);
    this.postHttpServices
      .getUserPosts(request)
      .then((posts) => this.handleGetUserPostsSuccessEvent(posts))
      .catch((error) => this.handleGetUserPostsErrorEvent(error));
  }

  private recalculatePreviousNextButtonCssClasses() {
    let classes = [];
    if (this.currentPage.firstPage) {
      classes.push("disabled");
    }
    this.previousButtonCssClasses = classes.join(" ");
    classes = [];
    if (this.currentPage.lastPage) {
      classes.push("disabled");
    }
    this.nextButtonCssClasses = classes.join(" ");
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
    this.dataSource.data = this.dataSource.data.filter(
      (post) => post.id !== postId
    );
    this.dataSource._updateChangeSubscription(); // <-- Refresh the data source, reference: https://stackoverflow.com/questions/54744770/how-to-delete-particular-row-from-angular-material-table-which-doesnt-have-filte
    this.postsState.deletePost(postId);
  }

  private handleGetUserPostsSuccessEvent(postsPage: PostsPage) {
    this.currentPage = postsPage;
    this.dataSource = new MatTableDataSource(postsPage.items);
    this.dataSource.sort = this.sort;
    this.recalculatePreviousNextButtonCssClasses();
  }
}
