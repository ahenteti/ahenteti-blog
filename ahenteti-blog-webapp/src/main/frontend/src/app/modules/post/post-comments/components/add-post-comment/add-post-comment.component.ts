import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserAwareComponent } from "src/app/modules/user/components/user-aware.component";
import { ICreatePostCommentApiRequest } from "../../models/post-comment.external.models";
import { UserObservable } from "src/app/modules/user/services/user.observable";
import { PostCommentHttpClient } from "../../services/post-comment.http-client";
import { AlertService } from "src/app/modules/alert/alert.service";
import {
  IPostComment,
  EmptyPostComment,
} from "../../models/post-comment.internal.models";

@Component({
  selector: "app-add-post-comment",
  templateUrl: "./add-post-comment.component.html",
  styleUrls: ["./add-post-comment.component.scss"],
})
export class AddPostCommentComponent extends UserAwareComponent {
  postId: number;
  @Output() newPostComment = new EventEmitter<IPostComment>();
  @ViewChild("commentTextarea", { static: false }) commentTextarea: ElementRef;

  constructor(
    route: ActivatedRoute,
    userObservable: UserObservable,
    private commentHttpClient: PostCommentHttpClient,
    private alertService: AlertService
  ) {
    super(userObservable);
    this.postId = route.snapshot.params["id"];
  }

  onSubmit(form: NgForm) {
    this.commentTextarea.nativeElement.value = "";
    const comment = this.toComment(form.value);
    this.newPostComment.emit(comment);
    this.commentHttpClient
      .createPostComment(form.value)
      .then(() => this.alertSavingCommentSuccess())
      .catch((error) => {
        console.error(error);
        this.alertSavingCommentError();
        this.newPostComment.emit(new EmptyPostComment());
      });
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

  private alertSavingCommentSuccess() {
    this.alertService.info("comment saved with success");
  }

  private alertSavingCommentError() {
    this.alertService.error(
      "error while saving your comment, please try again"
    );
  }
}
