import { Component, Input } from "@angular/core";
import { IComment, Comments } from "../../models/post.internal.models";
import { IUser } from "src/app/modules/shared/models/user.internal.models";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent {
  @Input()
  comments: Comments;
}
