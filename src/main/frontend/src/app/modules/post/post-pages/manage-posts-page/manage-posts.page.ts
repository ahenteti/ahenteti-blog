import { Component, OnInit } from "@angular/core";
import { PostHttpClient } from "../../post-shared/services/post.http-client";
import {
  PostsPage,
  PostSummary,
} from "../../post-shared/models/post.internal.models";
import { MatTableDataSource } from "@angular/material/table";
import { AlertService } from "src/app/modules/alert/alert.service";
import { PostConverter } from "../../post-shared/services/post.converter";
import { PostsState } from "../../post-shared/state/posts.state";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component";
import { AbstractManageResourcesPage } from "src/app/modules/shared/pages/manage-resources.page";

@Component({
  templateUrl: "manage-posts.page.html",
  styleUrls: ["manage-posts.page.scss"],
})
export class ManagePostsPage extends AbstractManageResourcesPage<PostSummary>
  implements OnInit {
  constructor(
    private postHttpClient: PostHttpClient,
    private postConverter: PostConverter,
    private alertService: AlertService,
    private postsState: PostsState,
    private dialog: MatDialog
  ) {
    super();
    this.currentPage = new PostsPage();
    this.dataSource = new MatTableDataSource([]);
    this.columns = [
      "id",
      "title",
      "category",
      "createdAt",
      "lastUpdatedAt",
      "actions",
    ];
  }

  // prettier-ignore
  fetchPage(filter: string, page: number) {
    const request = this.postConverter.toGetUserPostsApiRequest(filter, page);
    this.postHttpClient
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
        this.postHttpClient
          .deletePost(request)
          .then(() => this.handleDeletePostSuccessEvent(postId))
          .catch((error) => this.handleDeletePostErrorEvent(error));
      }
    });
  }

  deleteAllUserPosts() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Do you confirm the deletion of all your posts ?",
      width: "375px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const request = this.postConverter.toDeleteUserPostsApiRequest();
        this.postHttpClient
          .deleteUserPosts(request)
          .then(() => this.handleDeleteUserPostsSuccessEvent())
          .catch((error) => this.handleDeleteUserPostsErrorEvent(error));
      }
    });
  }

  downloadAllUserPosts() {
    const request = this.postConverter.toGetAllUserPostsApiRequest();
    this.postHttpClient
      .getUserPostsBlob(request)
      .then((posts) => this.handleGetAllUserPostsSuccessEvent(posts))
      .catch((error) => this.handleGetAllUserPostsErrorEvent(error));
  }

  // prettier-ignore
  onFileUpload(file: File) {
    const request = this.postConverter.toUploadPostsApiRequest(file);
    this.postHttpClient.uploadPosts(request)
      .then(() => this.handleUploadPostsApiRequestSuccessEvent())
      .catch((error) => this.handleUploadPostsApiRequestErrorEvent(error));
  }

  // prettier-ignore
  private handleUploadPostsApiRequestErrorEvent(error) {
    this.postHttpClient.handleError(error, "Error while uploading your posts :(")
  }

  private handleUploadPostsApiRequestSuccessEvent() {
    this.fetchPage(this.filter, 0);
    this.postsState.init();
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

  private handleGetAllUserPostsSuccessEvent(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.download = this.calculateUserPostsFilenameToDownload();
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private handleGetAllUserPostsErrorEvent(error: any): any {
    console.error(error);
    this.alertService.error("Error while fetching your posts :(");
  }

  // prettier-ignore
  private handleDeleteUserPostsErrorEvent(error: any): any {
    this.postHttpClient.handleError(error, "Error while deleting user posts :(");
  }

  private handleDeleteUserPostsSuccessEvent(): any {
    this.currentPage = new PostsPage();
    this.dataSource = new MatTableDataSource([]);
    this.recalculatePreviousNextButtonCssClasses();
  }

  private calculateUserPostsFilenameToDownload(): string {
    // I didn't find e method like this Date.toString(formatter) in javascript, so I have used
    // this @sebastian.i solution that I have found on this stackoverflow thread: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    // Feel free to improve this code if you find a more elegant implementation, and please let me know about :)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("" + (currentDate.getMonth() + 1)).padStart(2, "0");
    const date = ("" + currentDate.getDate()).padStart(2, "0");
    const hour = ("" + currentDate.getHours()).padStart(2, "0");
    const minutes = ("" + currentDate.getMinutes()).padStart(2, "0");
    const seconds = ("" + currentDate.getSeconds()).padStart(2, "0");
    const filename =
      "posts_" + year + month + date + hour + minutes + seconds + ".json";
    return filename;
  }
}
