import { Component, Input } from "@angular/core";
import { IComment, Comments } from "../../models/post.internal.models";
import { ICommentApiRequest } from "../../models/post.external.models";
import { PostHttpServices } from "../../services/post.http.services";
import { AlertService } from "src/app/modules/alert/alert.service";
import { CommentConverter } from "../../converters/comment.converter";
import { UserAwareComponent } from "src/app/modules/shared/components/user-aware.component";
import { UserObservableService } from "src/app/modules/shared/services/user-observable.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent extends UserAwareComponent {
  @Input() comments: Comments;

  constructor(
    userObservableService: UserObservableService,
    private postHttpServices: PostHttpServices,
    private alertService: AlertService,
    private commentConverter: CommentConverter
  ) {
    super(userObservableService);
  }

  onCommentSubmit(commentApiRequest: ICommentApiRequest) {
    const comment = this.toComment(commentApiRequest);
    this.comments = [comment, ...this.comments];
    this.postHttpServices
      .createComment(commentApiRequest)
      .then((response) => {
        console.log(response);
        this.alertSavingCommentSuccess();
      })
      .catch((error) => {
        console.log(error);
        this.alertSavingCommentError();
        this.removeLastAddedComment(comment);
      });
  }

  private removeLastAddedComment(comment: IComment) {
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

  private toComment(commentApiRequest: ICommentApiRequest) {
    return this.commentConverter.toComment(commentApiRequest, this.user);
  }
}
