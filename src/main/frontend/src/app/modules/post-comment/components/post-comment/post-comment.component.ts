import { Component, Input } from "@angular/core";
import { IPostComment } from "../../models/post-comment.internal.models";

@Component({
  selector: "app-post-comment",
  templateUrl: "./post-comment.component.html",
  styleUrls: ["./post-comment.component.scss"],
})
export class PostCommentComponent {
  @Input()
  comment: IPostComment;
}
