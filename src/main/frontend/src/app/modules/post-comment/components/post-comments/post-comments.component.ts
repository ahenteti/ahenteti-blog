import { Component, OnInit } from "@angular/core";
import { AlertService } from "src/app/modules/alert/alert.service";
import { UserAwareComponent } from "src/app/modules/user/user-aware.component";
import { UserObservable } from "src/app/modules/user/services/user.observable";
import { PostCommentHttpServices } from "../../services/post-comment.http.service";
import { ActivatedRoute } from "@angular/router";
import {
  PostComments,
  IPostComment,
} from "../../models/post-comment.internal.models";
import { PostCommentConverter } from "../../converter/post-comment.converter";
import {
  ICreatePostCommentApiRequest,
  GetPostCommentsApiRequest,
} from "../../models/post-comment.external.models";

@Component({
  selector: "app-post-comments",
  templateUrl: "./post-comments.component.html",
  styleUrls: ["./post-comments.component.scss"],
})
export class PostCommentsComponent extends UserAwareComponent
  implements OnInit {
  private postId: number;
  private currentCommentsPage = -1;
  comments: PostComments = new PostComments();
  stillMoreComments = true;

  constructor(
    route: ActivatedRoute,
    userObservable: UserObservable,
    private commentHttpServices: PostCommentHttpServices,
    private commentConverter: PostCommentConverter,
    private alertService: AlertService
  ) {
    super(userObservable);
    this.postId = route.snapshot.params["id"];
  }

  ngOnInit() {
    super.ngOnInit();
    const request = this.commentConverter.toGetPostCommentsApiRequest(
      this.postId,
      ++this.currentCommentsPage
    );
    this.loadComments(request);
  }

  onCommentSubmit(createCommentApiRequest: ICreatePostCommentApiRequest) {
    const comment = this.toComment(createCommentApiRequest);
    this.comments = [comment, ...this.comments];
    this.commentHttpServices
      .createPostComment(createCommentApiRequest)
      .then(() => {
        this.alertSavingCommentSuccess();
      })
      .catch((error) => {
        console.error(error);
        this.alertSavingCommentError();
        this.removeLastAddedComment(comment);
      });
  }

  private removeLastAddedComment(comment: IPostComment) {
    this.comments = this.comments.filter((x) => x !== comment);
  }

  private alertSavingCommentSuccess() {
    this.alertService.info("comment saved with success");
  }

  private alertSavingCommentError() {
    this.alertService.error(
      "error while saving your comment, please try again"
    );
  }

  private toComment(
    createCommentApiRequest: ICreatePostCommentApiRequest
  ): IPostComment {
    return {
      author: this.user,
      createdAt: new Date(),
      value: createCommentApiRequest.value,
    };
  }

  private loadComments(request: GetPostCommentsApiRequest) {
    this.commentHttpServices
      .getPostComments(request)
      .then((comments) => {
        this.comments = new PostComments(...this.comments, ...comments);
        this.stillMoreComments = comments.length == 0;
      })
      .catch((error) => {
        console.error(error);
        this.alertService.error("error while fetching post comments :(");
      });
  }
}
