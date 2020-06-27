import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AlertService } from "src/app/modules/alert/alert.service";
import { UserAwareComponent } from "src/app/modules/user/components/user-aware.component";
import { UserObservable } from "src/app/modules/user/services/user.observable";
import { PostCommentHttpClient } from "../../services/post-comment.http-client";
import { ActivatedRoute } from "@angular/router";
import {
  PostComments,
  IPostComment,
  EmptyPostComment,
} from "../../models/post-comment.internal.models";
import { PostCommentConverter } from "../../converter/post-comment.converter";

@Component({
  selector: "app-post-comments",
  templateUrl: "./post-comments.component.html",
  styleUrls: ["./post-comments.component.scss"],
})
export class PostCommentsComponent extends UserAwareComponent
  implements OnInit {
  private slug: string;
  private currentCommentsPage = -1;
  postComments: PostComments = new PostComments();
  stillMoreComments = false;

  constructor(
    route: ActivatedRoute,
    userObservable: UserObservable,
    private commentHttpClient: PostCommentHttpClient,
    private commentConverter: PostCommentConverter,
    private alertService: AlertService
  ) {
    super(userObservable);
    this.slug = route.snapshot.params["slug"];
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadComments(true);
  }

  onNewPostComment(postComment: IPostComment) {
    if (postComment instanceof EmptyPostComment) {
      this.postComments.shift();
    } else {
      this.postComments = [postComment, ...this.postComments];
    }
  }

  loadMorePostComments() {
    this.loadComments();
  }

  private loadComments(onNgInit = false) {
    const request = this.commentConverter.toGetPostCommentsApiRequest(
      this.slug,
      ++this.currentCommentsPage
    );
    this.commentHttpClient
      .getPostComments(request)
      .then((comments) => {
        this.postComments = new PostComments(...this.postComments, ...comments);
        this.stillMoreComments = comments.length !== 0;
        if (!this.stillMoreComments && !onNgInit) {
          this.alertService.info("No more comments on this post");
        }
      })
      .catch((error) => {
        console.error(error);
        this.alertService.error("Error while fetching post comments :(");
      });
  }
}
